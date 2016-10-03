const React = require('react');
const moment = require('moment-timezone');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Table = require('./table');
const Greetings = require('./greetings');

const subscriptionExtension = React.createClass({

  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    order_products: React.PropTypes.arrayOf(PropTypes.subscription).isRequired,
    tracker_url: PropTypes.url()
  },

  orderProductToFields(orderProduct, tz) {
    const date = moment(orderProduct.expires_at).tz(tz).format('DD-MM-YYYY');
    const code = orderProduct.code ? orderProduct.code : translate(this.props.lang, 'unknownTicketCode');
    return [orderProduct.name, date, code];
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const products = this.props.order_products.map((op) => this.orderProductToFields(op, this.props.event.timezone));
    const headers = [
      {name: translate(this.props.lang, 'product')},
      {name:translate(this.props.lang, 'validTo')},
      {name:translate(this.props.lang, 'ticketCode')}
    ];

    return (
      <Envelope trackerUrl={this.props.tracker_url}>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
            {translate(this.props.lang, 'subscriptionSummary', {eventDate: this.props.event.name})}
          </Text>
          <Table fields={headers} values={products} />
          <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = subscriptionExtension;
