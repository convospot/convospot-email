'use strict';

var React = require('react');

var Text = require('./text');

var Divider = React.createClass({
  displayName: 'Divider',
  render: function render() {
    return React.createElement(
      Text,
      null,
      '----------'
    );
  }
});

module.exports = Divider;