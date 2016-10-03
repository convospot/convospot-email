const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const FullWidthImage = require('./fullWidthImage');
const Salutation = require('./salutation');
const ActionButton = require('./actionButton');
const Text = require('./text');
const Greetings = require('./greetings');
const FullWidthSection = require('./fullWidthSection');

const OrderReminder = React.createClass({

  propTypes: {
    event: PropTypes.event.isRequired,
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
    const eventImage = this.props.event.image_url ? <FullWidthImage alt={this.props.event.name}
                                                                    src={this.props.event.image_url}
                                                                    paddingBottom={`${style.distance.large}px`} /> : null;
    const downloadEticketButton = <ActionButton primary={true} text={translate(this.props.lang, 'downloadTicket')} href={this.props.user.downloads_href} />

    return (
      <Envelope showHeaderDivider={eventImage ? false : true} trackerUrl={this.props.tracker_url}>
        {eventImage}
        <FullWidthSection>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
            {translate(this.props.lang, 'orderReminder', {eventName: this.props.event.name})}
          </Text>
          {downloadEticketButton}
        </FullWidthSection>
        <FullWidthSection>
          <Greetings lang={this.props.lang} />
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = OrderReminder;
