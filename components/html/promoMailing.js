'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Text = require('./text');
var FullWidthImage = require('./fullWidthImage');
var FullWidthSection = require('./fullWidthSection');

var Mailing = React.createClass({
  displayName: 'Mailing',


  propTypes: {
    tracker_url: PropTypes.url(),
    message: React.PropTypes.string.isRequired,
    event: PropTypes.event.isRequired
  },

  render: function render() {
    var _this = this;

    var eventImage = this.props.event.image_url ? React.createElement(FullWidthImage, { alt: this.props.event.name,
      src: this.props.event.image_url,
      paddingBottom: style.distance.large + 'px' }) : null;
    var newLinedUserMessage = this.props.message.split("\n").map(function (e) {
      return React.createElement(
        Text,
        _this.props,
        e
      );
    });

    return React.createElement(
      Envelope,
      { showHeaderDivider: eventImage ? false : true, trackerUrl: this.props.tracker_url },
      eventImage,
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(
          Text,
          null,
          newLinedUserMessage
        ),
        React.createElement(
          Text,
          { size: 'small' },
          translate('en', 'promoMailingDisclaimer', { eventName: this.props.event.name })
        )
      )
    );
  }
});

module.exports = Mailing;