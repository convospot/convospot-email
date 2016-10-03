const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Greetings = require('./greetings');

const OrderInvoice = React.createClass({

  propTypes: {
    user: PropTypes.user.isRequired,
    event: PropTypes.event.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    order: PropTypes.order.isRequired
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    return (
      <Envelope trackerUrl={this.props.tracker_url}>
        <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
              {translate(this.props.lang, 'organizationCancelledOrder', {eventName: this.props.event.name, orderId: this.props.order.id})}
          </Text>
          <Text>
              {translate(this.props.lang, 'orderCancellationTicketRetracted')}
          </Text>
        <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = OrderInvoice;
