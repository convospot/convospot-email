'use strict';

var React = require('react');

var Contact = require('./contact');
var Breaker = require('./breaker');

var Envelope = React.createClass({
  displayName: 'Envelope',

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Breaker, null),
      this.props.children,
      React.createElement(Contact, null)
    );
  }
});

module.exports = Envelope;