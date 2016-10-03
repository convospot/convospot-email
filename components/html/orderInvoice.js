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

var orderInvoice = React.createClass({
  displayName: 'orderInvoice',


  propTypes: {
    user: PropTypes.user.isRequired,
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
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang }),
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'orderInvoiceAttached', { orderId: this.props.order.id })
        ),
        React.createElement(Greetings, { lang: this.props.lang })
      )
    );
  }
});

module.exports = orderInvoice;