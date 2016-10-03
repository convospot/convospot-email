'use strict';

var React = require('react');

var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Salutation = require('./salutation');
var ActionButton = require('./actionButton');
var Text = require('./text');
var Greetings = require('./greetings');

var PasswordReset = React.createClass({
  displayName: 'PasswordReset',


  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    reset_link: PropTypes.url()
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    var resetLink = React.createElement(ActionButton, { primary: true,
      text: translate(this.props.lang, 'resetPasswordButton'),
      href: this.props.reset_link });

    return React.createElement(
      Envelope,
      { trackerUrl: this.props.tracker_url },
      React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang }),
      React.createElement(
        Text,
        null,
        translate(this.props.lang, 'passwordReset')
      ),
      resetLink,
      React.createElement(
        Text,
        null,
        translate(this.props.lang, 'passwordResetExplanation')
      ),
      React.createElement(Greetings, { lang: this.props.lang })
    );
  }
});

module.exports = PasswordReset;