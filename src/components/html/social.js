const React = require('react');

const style = require('../style');

const Social = React.createClass({
  render() {
    return (
      <mj-section background-color={style.Colors.fullWhite}
                  padding-top={`${style.distance.extraSmall}px`}
                  padding-left="0px"
                  padding-right="0px"
                  padding-bottom={`${style.distance.extraSmall}px`}>
        <mj-social align="center"
                   facebook-content="inventid" facebook-href="https://www.facebook.com/inventid.nl"
                   display="facebook:url"
                   padding="0px 0px 0px 0px" />
      </mj-section>
    )
  }
});

module.exports = Social;
