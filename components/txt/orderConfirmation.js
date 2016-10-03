'use strict';

var React = require('react');

var PropTypes = require('../propTypes');
var translate = require('../translate');

var Salutation = require('./salutation');
var ActionButton = require('./actionButton');
var Text = require('./text');
var Table = require('./table');
var Greetings = require('./greetings');
var Envelope = require('./envelope');

var OrderConfirmation = React.createClass({
  displayName: 'OrderConfirmation',

  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    products: React.PropTypes.arrayOf(PropTypes.productQuantity).isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    var products = this.props.products.map(function (e) {
      return ['- ' + e.quantity + 'x ' + e.name];
    });
    var containsNonEtickets = this.props.products.filter(function (e) {
      return !e.eticket;
    }).length > 0;
    var containsNoSingleEticket = this.props.products.filter(function (e) {
      return !e.eticket;
    }).length === this.props.products.length;

    var downloadEticketButton = !containsNoSingleEticket ? React.createElement(ActionButton, { primary: true, text: translate(this.props.lang, 'downloadTicket'), href: this.props.user.downloads_href }) : null;
    var nonEticketText = containsNonEtickets ? React.createElement(
      Text,
      null,
      translate(this.props.lang, 'containsNonEtickets', { eventName: this.props.event.name })
    ) : null;

    var agreement = this.props.event.agreement ? React.createElement(
      Text,
      null,
      translate(this.props.lang, 'agreedAgreement', { agreement: this.props.event.agreement })
    ) : null;

    return React.createElement(
      Envelope,
      null,
      React.createElement(
        Text,
        null,
        translate(this.props.lang, 'orderConfirmation', { eventName: this.props.event.name })
      ),
      React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang }),
      React.createElement(
        Text,
        null,
        translate(this.props.lang, 'orderCompleted', { orderId: this.props.order.id, eventName: this.props.event.name })
      ),
      downloadEticketButton,
      nonEticketText,
      React.createElement(
        Text,
        null,
        translate(this.props.lang, 'orderSummary')
      ),
      React.createElement(Table, { fields: null, values: products }),
      agreement,
      React.createElement(
        Text,
        null,
        translate(this.props.lang, 'personalPageInformation'),
        ' ',
        translate(this.props.lang, 'supportInformation')
      ),
      React.createElement(ActionButton, { primary: false, text: translate(this.props.lang, 'personalPage'), href: this.props.user.personal_href }),
      React.createElement(Greetings, { lang: this.props.lang })
    );
  }
});

module.exports = OrderConfirmation;