const React = require('react');

const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Greetings = require('./greetings');

const TicketExample = React.createClass({

  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    event: PropTypes.event.isRequired
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
          {translate(this.props.lang, 'ticketExampleAttached', {eventName: this.props.event.name})}
        </Text>
        <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = TicketExample;
