'use strict';

var React = require('react');

var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Salutation = require('./salutation');
var Text = require('./text');
var Greetings = require('./greetings');
var FullWidthSection = require('./fullWidthSection');

var OrderReminder = React.createClass({
  displayName: 'OrderReminder',


  propTypes: {
    event: PropTypes.event.isRequired,
    order: PropTypes.order.isRequired,
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
          translate(this.props.lang, 'organizationCancelledOrder', { eventName: this.props.event.name, orderId: this.props.order.id })
        ),
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'orderCancellationTicketRetracted')
        )
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