const React = require('react');

const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Greetings = require('./greetings');

const PasswordResetConfirmation = React.createClass({

  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
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
          {translate(this.props.lang, 'passwordResetPerformed')}
        </Text>
        <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = PasswordResetConfirmation;
