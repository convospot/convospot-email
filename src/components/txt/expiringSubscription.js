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
const ActionButton = require('./actionButton');

const expiringSubscription = React.createClass({

  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    order_products: React.PropTypes.arrayOf(PropTypes.subscription).isRequired,
    tracker_url: PropTypes.url(),
    renewal_href: React.PropTypes.string
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
    const products = [this.orderProductToFields(this.props.order_product, this.props.event.timezone)];
    const headers = [
      {name: translate(this.props.lang, 'product')},
      {name:translate(this.props.lang, 'validTo')},
      {name:translate(this.props.lang, 'ticketCode')}
    ];

    const extendSubscription = this.props.renewal_href ? <ActionButton primary={true}
                          href={this.props.renewal_href}
                          text={translate(this.props.lang, 'extendSubscriptionButton')}/> : null;

    return (
      <Envelope trackerUrl={this.props.tracker_url}>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
            {translate(this.props.lang, 'expiringSubscription', {eventName: this.props.event.name})}
          </Text>
          <Table fields={headers} values={products} />
        {extendSubscription}
          <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = expiringSubscription;
