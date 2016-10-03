'use strict';

var React = require('react');

var style = require('../style');

var FullWidthSection = React.createClass({
  displayName: 'FullWidthSection',


  propTypes: {
    children: React.PropTypes.node.isRequired,
    paddingTop: React.PropTypes.string,
    paddingBottom: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      paddingTop: '0px',
      paddingBottom: '0px',
      backgroundColor: style.Colors.fullWhite
    };
  },
  render: function render() {
    return React.createElement(
      'mj-section',
      { 'padding-top': this.props.paddingTop, 'padding-bottom': this.props.paddingBottom, 'background-color': this.props.backgroundColor },
      React.createElement(
        'mj-column',
        { width: '100%', 'vertical-align': 'top' },
        this.props.children
      )
    );
  }
});

module.exports = FullWidthSection;