const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Divider = require('./divider');
const Greetings = require('./greetings');
const FullWidthSection = require('./fullWidthSection');

const UserSupportRequest = React.createClass({

  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    message: React.PropTypes.string.isRequired,
    tracker_url: PropTypes.url()
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const newLinedUserMessage = this.props.message.split("\n").map(e => <Text {...this.props}>{e}</Text>);

    return (
      <Envelope trackerUrl={this.props.tracker_url}>
        <FullWidthSection>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
            {translate(this.props.lang, 'supportRequestReceived')}
            <br />
            {translate(this.props.lang, 'respondToSupport')}
          </Text>
          <Greetings lang={this.props.lang} />
        </FullWidthSection>
        <FullWidthSection paddingTop={`${style.distance.medium}px`}>
          <Divider />
        </FullWidthSection>
        <FullWidthSection paddingTop={`${style.distance.medium}px`}>
          <Text>
            {translate(this.props.lang, 'dataReceived')}:
          </Text>
          {newLinedUserMessage}
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = UserSupportRequest;
