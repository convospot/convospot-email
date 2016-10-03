'use strict';

var React = require('react');

var style = require('../style');

var fontSize = function fontSize(size) {
  if (style.fontSize[size]) {
    return style.fontSize[size] + 'px';
  }
  throw new Error('Invalid fontsize supplied to Text component: ' + size);
};

var lineHeight = function lineHeight(size) {
  if (size === 'small') {
    return '16px';
  }
  return '22px';
};

var fontStyle = function fontStyle(style) {
  if (['normal', 'italic'].includes(style)) {
    return style;
  }
  throw new Error('Invalid fontstyle supplied to Text component: ' + style);
};

var Text = React.createClass({
  displayName: 'Text',

  propTypes: {
    size: React.PropTypes.string,
    style: React.PropTypes.string,
    align: React.PropTypes.string,
    paddingTop: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      size: 'medium',
      style: 'normal',
      align: 'left',
      paddingTop: style.distance.extraSmall + 'px',
      color: style.Colors.black
    };
  },
  render: function render() {
    return React.createElement(
      'mj-text',
      { 'font-style': fontStyle(this.props.style),
        'font-size': fontSize(this.props.size),
        'line-height': lineHeight(this.props.size),
        'padding-top': this.props.paddingTop,
        'padding-bottom': style.distance.extraSmall + 'px',
        color: this.props.color,
        align: this.props.align },
      this.props.children
    );
  }
});

module.exports = Text;