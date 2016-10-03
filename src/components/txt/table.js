const React = require('react');

const TableHeader = React.createClass({
  propTypes: {
    fields: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render() {
    const fields = this.props.fields.map(e => (<div>{e.name}  </div>));
    return (
      <div>
        {fields}
      </div>
    );
  }
});

const TableRow = React.createClass({
  propTypes: {
    values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render() {
    const fields = this.props.values.map(e => (<div>{e} </div>));
    return (
      <div>
        {fields}
      </div>
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
  },

  render() {
    const rows = this.props.values.map(e=> (<div><TableRow values={e} /><br /></div>));
    const header = this.props.fields ? <TableHeader fields={this.props.fields} /> : null;
    const fullHeader = header ? (<div>{header}<br />------------------<br /></div>) : null;
    return (
      <div>
        {fullHeader}
        {rows}
        <br />
      </div>
    );
  }
});

module.exports = Table;
