'use strict';

var React = require('react');

var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Salutation = require('./salutation');
var Text = require('./text');
var Greetings = require('./greetings');

var OrganizationInvoice = React.createClass({
  displayName: 'OrganizationInvoice',


  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    reference: React.PropTypes.string.isRequired
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
        translate(this.props.lang, 'organizationInvoiceAttached', { invoiceReference: this.props.reference })
      ),
      React.createElement(Greetings, { lang: this.props.lang })
    );
  }
});

module.exports = OrganizationInvoice;