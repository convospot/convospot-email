'use strict';

var React = require('react');

var Text = require('./text');

var Footer = React.createClass({
  displayName: 'Footer',

  propTypes: {
    lang: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        Text,
        null,
        'inventid',
        React.createElement('br', null),
        'Burgwal 47',
        React.createElement('br', null),
        '2611GG Delft',
        React.createElement('br', null)
      ),
      React.createElement(
        Text,
        null,
        'www.inventid.nl',
        React.createElement('br', null),
        'support@inventid.nl',
        React.createElement('br', null),
        'Privacy Statement (https://www.inventid.nl/docs/privacy-statement.pdf)'
      )
    );
  }
});

module.exports = Footer;