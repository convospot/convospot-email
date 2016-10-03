const React = require('react');

const style = require('../style');

const TableHeader = React.createClass({
  propTypes: {
    fields: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render() {
    const fields = this.props.fields.map(e => (<th width={e.width} style={{color: style.Colors.black, textAlign: 'left'}}>{e.name}</th>));
    return (
      <tr>
        {fields}
      </tr>
    );
  }
});

const TableRow = React.createClass({
  propTypes: {
    values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render() {
    const fields = this.props.values.map(e => (<td style={{color: style.Colors.black}}>{e}</td>));
    return (
      <tr>
        {fields}
      </tr>
    );
  }
});

const Table = React.createClass({
  propTypes: {
    fields: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      width: React.PropTypes.string.isRequired
    })),
    values: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string)).isRequired,
    width: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      width: style.width.full
    }
  },

  render() {
    const rows = this.props.values.map(e=> (<TableRow values={e} />));
    const header = this.props.fields ? <TableHeader fields={this.props.fields} /> : null;
    return (
      <mj-table width={this.props.width} font-size={style.fontSize.medium}>
        {header}
        {rows}
      </mj-table>
    );
  }
});

module.exports = Table;
