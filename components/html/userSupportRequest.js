'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Salutation = require('./salutation');
var Text = require('./text');
var Divider = require('./divider');
var Greetings = require('./greetings');
var FullWidthSection = require('./fullWidthSection');

var UserSupportRequest = React.createClass({
  displayName: 'UserSupportRequest',


  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    message: React.PropTypes.string.isRequired,
    tracker_url: PropTypes.url()
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
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
        FullWidthSection,
        null,
        React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang }),
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'supportRequestReceived'),
          React.createElement('br', null),
          translate(this.props.lang, 'respondToSupport')
        ),
        React.createElement(Greetings, { lang: this.props.lang })
      ),
      React.createElement(
        FullWidthSection,
        { paddingTop: style.distance.medium + 'px' },
        React.createElement(Divider, null)
      ),
      React.createElement(
        FullWidthSection,
        { paddingTop: style.distance.medium + 'px' },
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'dataReceived'),
          ':'
        ),
        newLinedUserMessage
      )
    );
  }
});

module.exports = UserSupportRequest;