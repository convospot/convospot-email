const React = require('react');

const Contact = require('./contact');
const Breaker = require('./breaker');

const Envelope = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render() {
    return (
      <div>
        <Breaker />
        {this.props.children}
        <Contact />
      </div>
    );
  }
});

module.exports = Envelope;
