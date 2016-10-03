const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const Text = require('./text');
const FullWidthImage = require('./fullWidthImage');
const FullWidthSection = require('./fullWidthSection');

const Mailing = React.createClass({

  propTypes: {
    tracker_url: PropTypes.url(),
    message: React.PropTypes.string.isRequired,
    event: PropTypes.event.isRequired
  },

  render() {
    const eventImage = this.props.event.image_url ? <FullWidthImage alt={this.props.event.name}
                                                                    src={this.props.event.image_url}
                                                                    paddingBottom={`${style.distance.large}px`} /> : null;
    const newLinedUserMessage = this.props.message.split("\n").map(e => <Text {...this.props}>{e}</Text>);

    return (
      <Envelope showHeaderDivider={eventImage ? false : true} trackerUrl={this.props.tracker_url}>
        {eventImage}
        <FullWidthSection>
          <Text>
            {newLinedUserMessage}
          </Text>
          <Text size="small">
            {translate('en', 'promoMailingDisclaimer', {eventName: this.props.event.name})}
          </Text>
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = Mailing;
