'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');

var FullWidthImage = React.createClass({
  displayName: 'FullWidthImage',

  propTypes: {
    alt: React.PropTypes.string,
    src: PropTypes.url(true),
    paddingBottom: React.PropTypes.string,
    paddingTop: React.PropTypes.string,
    backgroundColor: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      alt: '',
      paddingBottom: style.distance.small + 'px',
      paddingTop: style.distance.small + 'px',
      backgroundColor: style.Colors.fullWhite
    };
  },
  render: function render() {
    return React.createElement(
      'mj-section',
      { padding: '0px',
        'background-color': this.props.backgroundColor,
        'padding-top': this.props.paddingTop,
        'padding-bottom': this.props.paddingBottom },
      React.createElement(
        'mj-column',
        { 'vertical-align': 'top',
          width: style.width.full },
        React.createElement('mj-image', { src: this.props.src,
          alt: this.props.alt,
          align: 'center',
          border: 'none',
          'padding-left': '0',
          'padding-right': '0',
          'padding-bottom': '0',
          'padding-top': '0' })
      )
    );
  }
});

module.exports = FullWidthImage;