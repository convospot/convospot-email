const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');

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
    const buttonColor = this.props.primary ? style.Colors.blue : style.Colors.blueDark;
    return (
      <mj-button background-color={buttonColor}
                 font-size={style.fontSize.medium}
                 font-weight="bolder"
                 color={style.Colors.white}
                 border-radius={style.borderRadius}
                 width={style.width.half}
                 href={this.props.href}>
        {this.props.text}
      </mj-button>
    );
  }
});

module.exports = ActionButton;
