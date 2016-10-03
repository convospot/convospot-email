'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Salutation = require('./salutation');
var Text = require('./text');
var Greetings = require('./greetings');
var FullWidthSection = require('./fullWidthSection');

var UserSupportReply = React.createClass({
  displayName: 'UserSupportReply',


  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    message: React.PropTypes.string.isRequired,
    tracker_url: PropTypes.url(),
    who: React.PropTypes.string.isRequired
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
          newLinedUserMessage,
          React.createElement('br', null),
          translate(this.props.lang, 'replyForQuestions')
        ),
        React.createElement(Greetings, { lang: this.props.lang, who: this.props.who })
      )
    );
  }
});

module.exports = UserSupportReply;