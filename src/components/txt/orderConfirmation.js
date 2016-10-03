const React = require('react');

const PropTypes = require('../propTypes');
const translate = require('../translate');

const Salutation = require('./salutation');
const ActionButton = require('./actionButton');
const Text = require('./text');
const Table = require('./table');
const Greetings = require('./greetings');
const Envelope = require('./envelope');

const OrderConfirmation = React.createClass({
  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    products: React.PropTypes.arrayOf(PropTypes.productQuantity).isRequired
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const products = this.props.products.map(e=> [`- ${e.quantity}x ${e.name}`]);
    const containsNonEtickets = this.props.products.filter(e => !e.eticket).length > 0;
    const containsNoSingleEticket = this.props.products.filter(e => !e.eticket).length === this.props.products.length;

    const downloadEticketButton = !containsNoSingleEticket ?
      <ActionButton primary={true} text={translate(this.props.lang, 'downloadTicket')} href={this.props.user.downloads_href} /> : null
    const nonEticketText = containsNonEtickets ?
      <Text>{translate(this.props.lang, 'containsNonEtickets', {eventName: this.props.event.name})}</Text> : null;

    const agreement = this.props.event.agreement ?
      <Text>{translate(this.props.lang, 'agreedAgreement', {agreement: this.props.event.agreement})}</Text> : null;

    return (
      <Envelope>
        <Text>{translate(this.props.lang, 'orderConfirmation', {eventName: this.props.event.name})}</Text>

        <Salutation name={this.props.user.name} lang={this.props.lang} />
        <Text>{translate(this.props.lang, 'orderCompleted', {orderId: this.props.order.id, eventName: this.props.event.name})}</Text>

        {downloadEticketButton}
        {nonEticketText}

        <Text>{translate(this.props.lang, 'orderSummary')}</Text>

        <Table fields={null} values={products} />
        {agreement}

        <Text>{translate(this.props.lang, 'personalPageInformation')} {translate(this.props.lang, 'supportInformation')}</Text>
        <ActionButton primary={false} text={translate(this.props.lang, 'personalPage')} href={this.props.user.personal_href} />

        <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = OrderConfirmation;
