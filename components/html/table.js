'use strict';

var React = require('react');

var style = require('../style');

var TableHeader = React.createClass({
  displayName: 'TableHeader',

  propTypes: {
    fields: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render: function render() {
    var fields = this.props.fields.map(function (e) {
      return React.createElement(
        'th',
        { width: e.width, style: { color: style.Colors.black, textAlign: 'left' } },
        e.name
      );
    });
    return React.createElement(
      'tr',
      null,
      fields
    );
  }
});

var TableRow = React.createClass({
  displayName: 'TableRow',

  propTypes: {
    values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render: function render() {
    var fields = this.props.values.map(function (e) {
      return React.createElement(
        'td',
        { style: { color: style.Colors.black } },
        e
      );
    });
    return React.createElement(
      'tr',
      null,
      fields
    );
  }
});

var Table = React.createClass({
  displayName: 'Table',

  propTypes: {
    fields: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      width: React.PropTypes.string.isRequired
    })),
    values: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string)).isRequired,
    width: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      width: style.width.full
    };
  },
  render: function render() {
    var rows = this.props.values.map(function (e) {
      return React.createElement(TableRow, { values: e });
    });
    var header = this.props.fields ? React.createElement(TableHeader, { fields: this.props.fields }) : null;
    return React.createElement(
      'mj-table',
      { width: this.props.width, 'font-size': style.fontSize.medium },
      header,
      rows
    );
  }
});

module.exports = Table;