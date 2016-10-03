'use strict';

var React = require('react');

var style = require('../style');

var Social = React.createClass({
  displayName: 'Social',
  render: function render() {
    return React.createElement(
      'mj-section',
      { 'background-color': style.Colors.fullWhite,
        'padding-top': style.distance.extraSmall + 'px',
        'padding-left': '0px',
        'padding-right': '0px',
        'padding-bottom': style.distance.extraSmall + 'px' },
      React.createElement('mj-social', { align: 'center',
        'facebook-content': 'inventid', 'facebook-href': 'https://www.facebook.com/inventid.nl',
        display: 'facebook:url',
        padding: '0px 0px 0px 0px' })
    );
  }
});

module.exports = Social;