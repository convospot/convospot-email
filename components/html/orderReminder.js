'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var FullWidthImage = require('./fullWidthImage');
var Salutation = require('./salutation');
var ActionButton = require('./actionButton');
var Text = require('./text');
var Greetings = require('./greetings');
var FullWidthSection = require('./fullWidthSection');

var OrderReminder = React.createClass({
  displayName: 'OrderReminder',


  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url()
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    var eventImage = this.props.event.image_url ? React.createElement(FullWidthImage, { alt: this.props.event.name,
      src: this.props.event.image_url,
      paddingBottom: style.distance.large + 'px' }) : null;
    var downloadEticketButton = React.createElement(ActionButton, { primary: true, text: translate(this.props.lang, 'downloadTicket'), href: this.props.user.downloads_href });

    return React.createElement(
      Envelope,
      { showHeaderDivider: eventImage ? false : true, trackerUrl: this.props.tracker_url },
      eventImage,
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang }),
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'orderReminder', { eventName: this.props.event.name })
        ),
        downloadEticketButton
      ),
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Greetings, { lang: this.props.lang })
      )
    );
  }
});

module.exports = OrderReminder;