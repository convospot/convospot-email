'use strict';

var React = require('react');

var style = require('../style');

var Divider = React.createClass({
  displayName: 'Divider',
  render: function render() {
    return React.createElement('mj-divider', {
      'padding-top': '0px',
      'padding-bottom': '0px',
      'padding-left': style.distance.small + 'px',
      'padding-right': style.distance.small + 'px',
      'border-width': '1px',
      'border-color': style.Colors.companyGreen });
  }
});

module.exports = Divider;