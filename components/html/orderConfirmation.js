'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var FullWidthImage = require('./fullWidthImage');
var Salutation = require('./salutation');
var ActionButton = require('./actionButton');
var Text = require('./text');
var Table = require('./table');
var Greetings = require('./greetings');
var Divider = require('./divider');
var FullWidthSection = require('./fullWidthSection');

var OrderConfirmation = React.createClass({
  displayName: 'OrderConfirmation',


  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    products: React.PropTypes.arrayOf(PropTypes.productQuantity).isRequired,
    tracker_url: PropTypes.url()
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    var eventImage = this.props.event.image_url ? React.createElement(FullWidthImage, { alt: this.props.event.name,
      src: this.props.event.image_url,
      paddingBottom: style.distance.large + 'px' }) : null;
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
      { size: 'small' },
      translate(this.props.lang, 'agreedAgreement', { agreement: this.props.event.agreement })
    ) : null;

    return React.createElement(
      Envelope,
      { showHeaderDivider: eventImage ? false : true, trackerUrl: this.props.tracker_url },
      eventImage,
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang }),
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'orderCompleted', { orderId: this.props.order.id, eventName: this.props.event.name })
        ),
        downloadEticketButton,
        nonEticketText
      ),
      React.createElement(
        FullWidthSection,
        { paddingTop: style.distance.medium + 'px' },
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'orderSummary')
        ),
        React.createElement(Table, { fields: null, values: products }),
        agreement
      ),
      React.createElement(
        FullWidthSection,
        { paddingTop: style.distance.medium + 'px' },
        React.createElement(Divider, null),
        React.createElement(
          Text,
          { paddingTop: style.distance.medium + 'px' },
          translate(this.props.lang, 'personalPageInformation'),
          ' ',
          translate(this.props.lang, 'supportInformation')
        ),
        React.createElement(ActionButton, { primary: false, text: translate(this.props.lang, 'personalPage'), href: this.props.user.personal_href })
      ),
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Greetings, { lang: this.props.lang })
      )
    );
  }
});

module.exports = OrderConfirmation;