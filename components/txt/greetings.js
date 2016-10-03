'use strict';

var React = require('react');

var translate = require('../translate');
var Text = require('./text');

var Salutation = React.createClass({
  displayName: 'Salutation',

  propTypes: {
    lang: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    who: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    var who = this.props.who ? this.props.who : translate(this.props.lang, 'team');
    return React.createElement(
      Text,
      null,
      translate(this.props.lang, 'greetings'),
      React.createElement('br', null),
      React.createElement('br', null),
      who
    );
  }
});

module.exports = Salutation;