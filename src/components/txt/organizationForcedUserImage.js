const React = require('react');

const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const ActionButton = require('./actionButton');
const Text = require('./text');
const Greetings = require('./greetings');

const organizationForcedUserImage = React.createClass({

  propTypes: {
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
    const personalPageButton = <ActionButton primary={true}
                                             text={translate(this.props.lang, 'personalPage')}
                                             href={this.props.user.personal_href} />

    return (
      <Envelope trackerUrl={this.props.tracker_url}>
        <Salutation name={this.props.user.name} lang={this.props.lang} />
        <Text>
          {translate(this.props.lang, 'organizationForcedUserImage')}
        </Text>
        {personalPageButton}
        <Text>
          {translate(this.props.lang, 'userImageRequirements')}
        </Text>
        <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = organizationForcedUserImage;
