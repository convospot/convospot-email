'use strict';

var React = require('react');

var PropTypes = require('../propTypes');
var Text = require('./text');

var ActionButton = React.createClass({
  displayName: 'ActionButton',

  propTypes: {
    primary: React.PropTypes.bool,
    href: PropTypes.url(),
    text: React.PropTypes.string.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      primary: false
    };
  },
  render: function render() {
    return React.createElement(
      Text,
      null,
      this.props.text,
      ' @ ',
      this.props.href
    );
  }
});

module.exports = ActionButton;