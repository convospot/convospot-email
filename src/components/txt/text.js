const React = require('react');

const Text = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
        <br />
        <br />
      </div>);
  }
});

module.exports = Text;
