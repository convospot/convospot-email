'use strict';

var React = require('react');

var Text = React.createClass({
  displayName: 'Text',
  render: function render() {
    return React.createElement(
      'div',
      null,
      this.props.children,
      React.createElement('br', null),
      React.createElement('br', null)
    );
  }
});

module.exports = Text;