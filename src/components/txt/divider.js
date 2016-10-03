const React = require('react');

const Text = require('./text');

const Divider = React.createClass({
  render() {
    return (
      <Text>
        ----------
      </Text>
    );
  }
});

module.exports = Divider;
