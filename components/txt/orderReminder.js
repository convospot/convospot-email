'use strict';

var React = require('react');

var PropTypes = require('../propTypes');
var translate = require('../translate');

var Salutation = require('./salutation');
var ActionButton = require('./actionButton');
var Text = require('./text');
var Greetings = require('./greetings');
var Envelope = require('./envelope');

var OrderReminder = React.createClass({
  displayName: 'OrderReminder',

  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    var downloadEticketButton = React.createElement(ActionButton, { primary: true, text: translate(this.props.lang, 'downloadTicket'), href: this.props.user.downloads_href });

    return React.createElement(
      Envelope,
      null,
      React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang }),
      React.createElement(
        Text,
        null,
        translate(this.props.lang, 'orderReminder', { eventName: this.props.event.name })
      ),
      downloadEticketButton,
      React.createElement(Greetings, { lang: this.props.lang })
    );
  }
});

module.exports = OrderReminder;