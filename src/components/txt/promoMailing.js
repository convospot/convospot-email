const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Text = require('./text');

const PromoMailing = React.createClass({

  propTypes: {
    tracker_url: PropTypes.url(),
    message: React.PropTypes.string.isRequired,
    event: PropTypes.event.isRequired
  },

  render() {
    const newLinedUserMessage = this.props.message.split("\n").map(e => <Text {...this.props}>{e}</Text>);

    return (
      <Envelope trackerUrl={this.props.tracker_url}>
        <Text>
          {newLinedUserMessage}
        </Text>
        <Text>
          {translate('en', 'promoMailingDisclaimer', {eventName: this.props.event.name})}
        </Text>
      </Envelope>
    );
  }
});

module.exports = PromoMailing;