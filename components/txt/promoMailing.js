'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Text = require('./text');

var PromoMailing = React.createClass({
  displayName: 'PromoMailing',


  propTypes: {
    tracker_url: PropTypes.url(),
    message: React.PropTypes.string.isRequired,
    event: PropTypes.event.isRequired
  },

  render: function render() {
    var _this = this;

    var newLinedUserMessage = this.props.message.split("\n").map(function (e) {
      return React.createElement(
        Text,
        _this.props,
        e
      );
    });

    return React.createElement(
      Envelope,
      { trackerUrl: this.props.tracker_url },
      React.createElement(
        Text,
        null,
        newLinedUserMessage
      ),
      React.createElement(
        Text,
        null,
        translate('en', 'promoMailingDisclaimer', { eventName: this.props.event.name })
      )
    );
  }
});

module.exports = PromoMailing;