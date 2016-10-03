'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');

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
    var buttonColor = this.props.primary ? style.Colors.blue : style.Colors.blueDark;
    return React.createElement(
      'mj-button',
      { 'background-color': buttonColor,
        'font-size': style.fontSize.medium,
        'font-weight': 'bolder',
        color: style.Colors.white,
        'border-radius': style.borderRadius,
        width: style.width.half,
        href: this.props.href },
      this.props.text
    );
  }
});

module.exports = ActionButton;