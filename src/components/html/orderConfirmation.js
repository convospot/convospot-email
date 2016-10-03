const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const FullWidthImage = require('./fullWidthImage');
const Salutation = require('./salutation');
const ActionButton = require('./actionButton');
const Text = require('./text');
const Table = require('./table');
const Greetings = require('./greetings');
const Divider = require('./divider');
const FullWidthSection = require('./fullWidthSection');

const OrderConfirmation = React.createClass({

  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    products: React.PropTypes.arrayOf(PropTypes.productQuantity).isRequired,
    tracker_url: PropTypes.url()
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const eventImage = this.props.event.image_url ? <FullWidthImage alt={this.props.event.name}
                                                                    src={this.props.event.image_url}
                                                                    paddingBottom={`${style.distance.large}px`} /> : null;
    const products = this.props.products.map(e=> [`- ${e.quantity}x ${e.name}`]);
    const containsNonEtickets = this.props.products.filter(e => !e.eticket).length > 0;
    const containsNoSingleEticket = this.props.products.filter(e => !e.eticket).length === this.props.products.length;

    const downloadEticketButton = !containsNoSingleEticket ?
      <ActionButton primary={true} text={translate(this.props.lang, 'downloadTicket')} href={this.props.user.downloads_href} /> : null;
    const nonEticketText = containsNonEtickets ?
      <Text>{translate(this.props.lang, 'containsNonEtickets', {eventName: this.props.event.name})}</Text> : null;

    const agreement = this.props.event.agreement ?
      <Text size="small">{translate(this.props.lang, 'agreedAgreement', {agreement: this.props.event.agreement})}</Text> : null;

    return (
      <Envelope showHeaderDivider={eventImage ? false : true} trackerUrl={this.props.tracker_url}>
        {eventImage}
        <FullWidthSection>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
            {translate(this.props.lang, 'orderCompleted', {orderId: this.props.order.id, eventName: this.props.event.name})}
          </Text>
          {downloadEticketButton}
          {nonEticketText}
        </FullWidthSection>
        <FullWidthSection paddingTop={`${style.distance.medium}px`}>
          <Text>
            {translate(this.props.lang, 'orderSummary')}
          </Text>
          <Table fields={null} values={products} />
          {agreement}
        </FullWidthSection>
        <FullWidthSection paddingTop={`${style.distance.medium}px`}>
          <Divider />
          <Text paddingTop={`${style.distance.medium}px`}>
            {translate(this.props.lang, 'personalPageInformation')} {translate(this.props.lang, 'supportInformation')}
          </Text>
          <ActionButton primary={false} text={translate(this.props.lang, 'personalPage')} href={this.props.user.personal_href} />
        </FullWidthSection>
        <FullWidthSection>
          <Greetings lang={this.props.lang} />
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = OrderConfirmation;
