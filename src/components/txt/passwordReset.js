const React = require('react');

const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const ActionButton = require('./actionButton');
const Text = require('./text');
const Greetings = require('./greetings');

const PasswordReset = React.createClass({

  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    reset_link: PropTypes.url()
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const resetLink = <ActionButton primary={true}
                                             text={translate(this.props.lang, 'resetPasswordButton')}
                                             href={this.props.reset_link} />;

    return (
      <Envelope trackerUrl={this.props.tracker_url}>
        <Salutation name={this.props.user.name} lang={this.props.lang} />
        <Text>
          {translate(this.props.lang, 'passwordReset')}
        </Text>
        {resetLink}
        <Text>
          {translate(this.props.lang, 'passwordResetExplanation')}
        </Text>
        <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = PasswordReset;
