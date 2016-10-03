const React = require('react');

const style = require('../style');
const translate = require('../translate');

const Salutation = React.createClass({

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  propTypes: {
    lang: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    who: React.PropTypes.string
  },

  render() {
    const who = this.props.who ? this.props.who : translate(this.props.lang, 'team');
    return (
      <mj-text font-size={`${style.fontSize.medium}px`}
               padding-top={`${style.distance.small}px`}
               padding-bottom={`${style.distance.small}px`}>
        {translate(this.props.lang, 'greetings')}
        <br />
        {who}
      </mj-text>
    )
  }
});

module.exports = Salutation;
