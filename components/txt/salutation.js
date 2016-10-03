'use strict';

var React = require('react');

var translate = require('../translate');
var Text = require('./text');

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
      Text,
      null,
      translate(this.props.lang, 'salutation', { name: this.props.name }),
      React.createElement('br', null)
    );
  }
});

module.exports = Salutation;