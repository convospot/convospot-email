'use strict';

var React = require('react');

var Text = require('./text');

var Breaker = React.createClass({
  displayName: 'Breaker',
  render: function render() {
    return React.createElement(
      Text,
      null,
      '####'
    );
  }
});

module.exports = Breaker;