'use strict';

var React = require('react');

var PropTypes = require('../propTypes');
var style = require('../style');

var OpenTracker = React.createClass({
  displayName: 'OpenTracker',

  propTypes: {
    url: PropTypes.url(true)
  },

  render: function render() {
    return React.createElement(
      'mj-section',
      { 'padding-top': style.distance.medium + 'px',
        'padding-left': '0px',
        'padding-right': '0px',
        'padding-bottom': style.distance.small + 'px' },
      React.createElement(
        'mj-column',
        { 'vertical-align': 'top', width: style.width.full },
        React.createElement('mj-image', { src: this.props.url,
          align: 'center',
          border: 'none',
          width: '1px',
          'padding-left': '0',
          'padding-right': '0',
          'padding-bottom': '0px',
          'padding-top': '0' })
      )
    );
  }
});

module.exports = OpenTracker;