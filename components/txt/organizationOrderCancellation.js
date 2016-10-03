'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Salutation = require('./salutation');
var Text = require('./text');
var Greetings = require('./greetings');

var OrderInvoice = React.createClass({
  displayName: 'OrderInvoice',


  propTypes: {
    user: PropTypes.user.isRequired,
    event: PropTypes.event.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    order: PropTypes.order.isRequired
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
      ),
      React.createElement(Greetings, { lang: this.props.lang })
    );
  }
});

module.exports = OrderInvoice;