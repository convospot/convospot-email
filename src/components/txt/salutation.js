const React = require('react');

const translate = require('../translate');
const Text = require('./text');

const Salutation = React.createClass({
  propTypes: {
    lang: React.PropTypes.string,
    name: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    return (
      <Text>
        {translate(this.props.lang, 'salutation', {name: this.props.name})}<br />
      </Text>
    )
  }
});

module.exports = Salutation;
