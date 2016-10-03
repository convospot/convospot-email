'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');

var Header = require('./header');
var Contact = require('./contact');
var Social = require('./social');
var OpenTracker = require('./openTracker');

var Envelope = React.createClass({
  displayName: 'Envelope',


  propTypes: {
    children: React.PropTypes.node.isRequired,
    showHeaderDivider: React.PropTypes.bool,
    trackerUrl: PropTypes.url()
  },

  getDefaultProps: function getDefaultProps() {
    return {
      showHeaderDivider: true
    };
  },
  render: function render() {
    var tracker = this.props.trackerUrl ? React.createElement(OpenTracker, { url: this.props.trackerUrl }) : null;
    return React.createElement(
      'mjml',
      null,
      React.createElement(
        'mj-head',
        null,
        React.createElement('mj-font', { name: 'Open Sans',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400' }),
        React.createElement(
          'mj-attributes',
          null,
          React.createElement('mj-all', { 'font-family': 'Open Sans, Ubuntu, sans-serif' })
        )
      ),
      React.createElement(
        'mj-body',
        null,
        React.createElement(
          'mj-container',
          { 'background-color': style.Colors.background, width: '500px' },
          React.createElement('mj-spacer', { height: style.distance.medium + 'px' }),
          React.createElement(Header, { showDivider: this.props.showHeaderDivider }),
          this.props.children,
          React.createElement(Contact, null),
          React.createElement(Social, null),
          tracker,
          React.createElement('mj-spacer', { height: style.distance.medium + 'px' })
        )
      )
    );
  }
});

module.exports = Envelope;