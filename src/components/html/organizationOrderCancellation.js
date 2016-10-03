const React = require('react');

const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Greetings = require('./greetings');
const FullWidthSection = require('./fullWidthSection');

const OrderReminder = React.createClass({

  propTypes: {
    event: PropTypes.event.isRequired,
    order: PropTypes.order.isRequired,
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url()
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    return (
      <Envelope trackerUrl={this.props.tracker_url}>
        <FullWidthSection>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
            {translate(this.props.lang, 'organizationCancelledOrder', {eventName: this.props.event.name, orderId: this.props.order.id})}
          </Text>
          <Text>
            {translate(this.props.lang, 'orderCancellationTicketRetracted')}
          </Text>
        </FullWidthSection>
        <FullWidthSection>
          <Greetings lang={this.props.lang} />
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = OrderReminder;
