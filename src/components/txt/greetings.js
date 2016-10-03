const React = require('react');

const translate = require('../translate');
const Text = require('./text');

const Salutation = React.createClass({
  propTypes: {
    lang: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    who: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const who = this.props.who ? this.props.who : translate(this.props.lang, 'team');
    return (
      <Text>
        {translate(this.props.lang, 'greetings')}
        <br /><br />
        {who}
      </Text>
    )
  }
});

module.exports = Salutation;
