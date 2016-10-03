const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Greetings = require('./greetings');

const Mailing = React.createClass({

  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    message: React.PropTypes.string.isRequired,
    event: PropTypes.event.isRequired
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const newLinedUserMessage = this.props.message.split("\n").map(e => <Text {...this.props}>{e}</Text>);
    const sender = translate(this.props.lang, 'organizationOf', {eventName: this.props.event.name});

    return (
      <Envelope trackerUrl={this.props.tracker_url}>
        <Salutation name={this.props.user.name} lang={this.props.lang} />
        <Text>
          {newLinedUserMessage}
        </Text>
        <Greetings lang={this.props.lang} who={sender} />
      </Envelope>
    );
  }
});

module.exports = Mailing;