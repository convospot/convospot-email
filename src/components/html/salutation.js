const React = require('react');

const style = require('../style');
const translate = require('../translate');

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
      <mj-text font-weight="bold"
               font-size={`${style.fontSize.large}px`}
               padding-top={`${style.distance.small}px`}
               padding-bottom={`${style.distance.small}px`}>
        {translate(this.props.lang, 'salutation', {name: this.props.name})}
      </mj-text>
    )
  }
});

module.exports = Salutation;
