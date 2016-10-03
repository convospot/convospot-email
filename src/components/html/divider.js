const React = require('react');

const style = require('../style');

const Divider = React.createClass({
  render() {
    return (
      <mj-divider
        padding-top="0px"
        padding-bottom="0px"
        padding-left={`${style.distance.small}px`}
        padding-right={`${style.distance.small}px`}
        border-width="1px"
        border-color={style.Colors.companyGreen} />
    );
  }
});

module.exports = Divider;
