'use strict';

var React = require('react');

var style = require('../style');
var translate = require('../translate');

var Salutation = React.createClass({
  displayName: 'Salutation',

  propTypes: {
    lang: React.PropTypes.string,
    name: React.PropTypes.string.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    return React.createElement(
      'mj-text',
      { 'font-weight': 'bold',
        'font-size': style.fontSize.large + 'px',
        'padding-top': style.distance.small + 'px',
        'padding-bottom': style.distance.small + 'px' },
      translate(this.props.lang, 'salutation', { name: this.props.name })
    );
  }
});

module.exports = Salutation;