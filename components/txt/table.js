'use strict';

var React = require('react');

var TableHeader = React.createClass({
  displayName: 'TableHeader',

  propTypes: {
    fields: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render: function render() {
    var fields = this.props.fields.map(function (e) {
      return React.createElement(
        'div',
        null,
        e.name,
        '  '
      );
    });
    return React.createElement(
      'div',
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
        'div',
        null,
        e,
        ' '
      );
    });
    return React.createElement(
      'div',
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
    values: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string)).isRequired
  },

  render: function render() {
    var rows = this.props.values.map(function (e) {
      return React.createElement(
        'div',
        null,
        React.createElement(TableRow, { values: e }),
        React.createElement('br', null)
      );
    });
    var header = this.props.fields ? React.createElement(TableHeader, { fields: this.props.fields }) : null;
    var fullHeader = header ? React.createElement(
      'div',
      null,
      header,
      React.createElement('br', null),
      '------------------',
      React.createElement('br', null)
    ) : null;
    return React.createElement(
      'div',
      null,
      fullHeader,
      rows,
      React.createElement('br', null)
    );
  }
});

module.exports = Table;