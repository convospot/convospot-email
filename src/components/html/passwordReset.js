const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const ActionButton = require('./actionButton');
const Text = require('./text');
const Greetings = require('./greetings');
const FullWidthSection = require('./fullWidthSection');

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
        <FullWidthSection>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
            {translate(this.props.lang, 'passwordReset')}
          </Text>
          {resetLink}
          <Text>
            {translate(this.props.lang, 'passwordResetExplanation')}
          </Text>
        </FullWidthSection>
        <FullWidthSection>
          <Greetings lang={this.props.lang} />
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = PasswordReset;
