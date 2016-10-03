const React = require('react');

const PropTypes = require('../propTypes');
const Text = require('./text');

const ActionButton = React.createClass({
  propTypes: {
    primary: React.PropTypes.bool,
    href: PropTypes.url(),
    text: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      primary: false
    }
  },

  render() {
    return (
      <Text>
        {this.props.text} @ {this.props.href}
      </Text>
    );
  }
});

module.exports = ActionButton;
