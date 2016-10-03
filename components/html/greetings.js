'use strict';

var React = require('react');

var style = require('../style');
var translate = require('../translate');

var Salutation = React.createClass({
  displayName: 'Salutation',
  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },


  propTypes: {
    lang: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    who: React.PropTypes.string
  },

  render: function render() {
    var who = this.props.who ? this.props.who : translate(this.props.lang, 'team');
    return React.createElement(
      'mj-text',
      { 'font-size': style.fontSize.medium + 'px',
        'padding-top': style.distance.small + 'px',
        'padding-bottom': style.distance.small + 'px' },
      translate(this.props.lang, 'greetings'),
      React.createElement('br', null),
      who
    );
  }
});

module.exports = Salutation;