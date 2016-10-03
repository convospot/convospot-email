const React = require('react');

const style = require('../style');

const fontSize = (size) => {
  if (style.fontSize[size]) {
    return `${style.fontSize[size]}px`;
  }
  throw new Error(`Invalid fontsize supplied to Text component: ${size}`);
};

const lineHeight = (size) => {
  if (size === 'small') {
    return '16px';
  }
  return '22px';
};

const fontStyle = (style) => {
  if (['normal', 'italic'].includes(style)) {
    return style;
  }
  throw new Error(`Invalid fontstyle supplied to Text component: ${style}`);
};

const Text = React.createClass({
  propTypes: {
    size: React.PropTypes.string,
    style: React.PropTypes.string,
    align: React.PropTypes.string,
    paddingTop: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      size: 'medium',
      style: 'normal',
      align: 'left',
      paddingTop: `${style.distance.extraSmall}px`,
      color: style.Colors.black
    }
  },

  render() {
    return (
      <mj-text font-style={fontStyle(this.props.style)}
               font-size={fontSize(this.props.size)}
               line-height={lineHeight(this.props.size)}
               padding-top={this.props.paddingTop}
               padding-bottom={`${style.distance.extraSmall}px`}
               color={this.props.color}
               align={this.props.align}>
        {this.props.children}
      </mj-text>);
  }
});

module.exports = Text;
