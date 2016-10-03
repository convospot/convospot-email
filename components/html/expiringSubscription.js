'use strict';

var React = require('react');
var moment = require('moment-timezone');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var FullWidthImage = require('./fullWidthImage');
var Salutation = require('./salutation');
var Text = require('./text');
var Table = require('./table');
var Greetings = require('./greetings');
var ActionButton = require('./actionButton');
var FullWidthSection = require('./fullWidthSection');

var expiringSubscription = React.createClass({
  displayName: 'expiringSubscription',


  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    order_products: React.PropTypes.arrayOf(PropTypes.subscription).isRequired,
    tracker_url: PropTypes.url(),
    renewal_href: React.PropTypes.string
  },

  orderProductToFields: function orderProductToFields(orderProduct, tz) {
    var date = moment(orderProduct.expires_at).tz(tz).format('DD-MM-YYYY');
    var code = orderProduct.code ? orderProduct.code : translate(this.props.lang, 'unknownTicketCode');
    return [orderProduct.name, date, code];
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
    var products = [this.orderProductToFields(this.props.order_product, this.props.event.timezone)];
    var headers = [{ name: translate(this.props.lang, 'product') }, { name: translate(this.props.lang, 'validTo') }, { name: translate(this.props.lang, 'ticketCode') }];

    var extendSubscription = this.props.renewal_href ? React.createElement(
      FullWidthSection,
      null,
      React.createElement(ActionButton, { primary: true,
        href: this.props.renewal_href,
        text: translate(this.props.lang, 'extendSubscriptionButton') })
    ) : null;

    return React.createElement(
      Envelope,
      { showHeaderDivider: eventImage ? false : true, trackerUrl: this.props.tracker_url },
      eventImage,
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang })
      ),
      React.createElement(
        FullWidthSection,
        { paddingTop: style.distance.medium + 'px' },
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'expiringSubscription', { eventName: this.props.event.name })
        ),
        React.createElement(Table, { fields: headers, values: products })
      ),
      extendSubscription,
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Greetings, { lang: this.props.lang })
      )
    );
  }
});

module.exports = expiringSubscription;