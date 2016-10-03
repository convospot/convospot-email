const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Greetings = require('./greetings');
const FullWidthSection = require('./fullWidthSection');

const UserSupportReply = React.createClass({

  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    message: React.PropTypes.string.isRequired,
    tracker_url: PropTypes.url(),
    who: React.PropTypes.string.isRequired
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
            {newLinedUserMessage}
            <br />
            {translate(this.props.lang, 'replyForQuestions')}
          </Text>
          <Greetings lang={this.props.lang} who={this.props.who} />
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = UserSupportReply;
