'use strict';

var React = require('react');

var style = require('../style');
var Text = require('./text');
var Divider = require('./divider');
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
      'mj-section',
      { 'background-color': style.Colors.fullWhite,
        'padding-top': style.distance.medium + 'px',
        'padding-left': '0px',
        'padding-right': '0px',
        'padding-bottom': style.distance.small + 'px' },
      React.createElement(
        'mj-column',
        { 'vertical-align': 'top', width: style.width.full },
        React.createElement(Divider, null)
      ),
      React.createElement(
        'mj-column',
        { 'vertical-align': 'top', width: style.width.half },
        React.createElement(
          Text,
          { size: 'small', 'padding-top': style.distance.small + 'px', color: style.Colors.greyDark, align: 'left' },
          'inventid',
          React.createElement('br', null),
          'Burgwal 47',
          React.createElement('br', null),
          '2611GG Delft',
          React.createElement('br', null)
        )
      ),
      React.createElement(
        'mj-column',
        { 'vertical-align': 'top', width: style.width.half },
        React.createElement(
          Text,
          { size: 'small', 'padding-top': style.distance.small + 'px', color: style.Colors.greyDark, align: 'left' },
          React.createElement(
            'a',
            { href: 'https://www.inventid.nl' },
            'www.inventid.nl'
          ),
          React.createElement('br', null),
          React.createElement(
            'a',
            { href: 'mailto:support@inventid.nl' },
            'support@inventid.nl'
          ),
          React.createElement('br', null),
          React.createElement(
            'a',
            { href: 'https://www.inventid.nl/docs/privacy-statement.pdf' },
            'Privacy Statement'
          )
        )
      )
    );
  }
});

module.exports = Footer;