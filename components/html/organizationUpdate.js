'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');
var transform = require('../transform');

var Envelope = require('./envelope');
var Salutation = require('./salutation');
var Text = require('./text');
var Greetings = require('./greetings');
var FullWidthSection = require('./fullWidthSection');
var Divider = require('./divider');
var Table = require('./table');

var OrganizationUpdate = React.createClass({
  displayName: 'OrganizationUpdate',


  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    startDate: React.PropTypes.string.isRequired,
    endDate: React.PropTypes.string.isRequired,
    events: React.PropTypes.arrayOf(PropTypes.eventSales).isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    var _this = this;

    var fields = [{ name: translate(this.props.lang, 'product'), width: style.width.half }, { name: translate(this.props.lang, 'quantity'), width: style.width.quarter }, { name: translate(this.props.lang, 'revenue'), width: style.width.quarter }];
    var events = this.props.events.map(function (e) {
      var totalRevenue = transform.intToCurrency(e.products.reduce(function (val, product) {
        return val + product.revenue;
      }, 0));
      var tableValues = e.products.map(function (e) {
        return [e.name, e.quantity + 'x', transform.intToCurrency(e.revenue)];
      });
      return React.createElement(
        FullWidthSection,
        { paddingTop: style.distance.medium + 'px' },
        React.createElement(
          Text,
          null,
          translate(_this.props.lang, 'eventRevenue', { eventName: e.event.name, totalRevenue: totalRevenue })
        ),
        React.createElement(Table, { fields: fields,
          values: tableValues })
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
          translate(this.props.lang, 'organizationUpdateSales', { startDate: this.props.startDate, endDate: this.props.endDate })
        ),
        React.createElement(Greetings, { lang: this.props.lang })
      ),
      React.createElement(
        FullWidthSection,
        { paddingTop: style.distance.medium + 'px' },
        React.createElement(Divider, null)
      ),
      events
    );
  }
});

module.exports = OrganizationUpdate;