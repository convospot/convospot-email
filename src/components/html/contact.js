const React = require('react');

const style = require('../style');
const Text = require('./text');
const Divider = require('./divider');
const Footer = React.createClass({

  propTypes: {
    lang: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      lang: 'en'
    };
  },

  render() {
    return (
      <mj-section background-color={style.Colors.fullWhite}
                  padding-top={`${style.distance.medium}px`}
                  padding-left="0px"
                  padding-right="0px"
                  padding-bottom={`${style.distance.small}px`}>
        <mj-column vertical-align="top" width={style.width.full}>
          <Divider />
        </mj-column>
        <mj-column vertical-align="top" width={style.width.half}>
          <Text size="small" padding-top={`${style.distance.small}px`} color={style.Colors.greyDark} align="left">
            inventid<br />
            Burgwal 47<br />
            2611GG Delft<br />
          </Text>
        </mj-column>
        <mj-column vertical-align="top" width={style.width.half}>
          <Text size="small" padding-top={`${style.distance.small}px`} color={style.Colors.greyDark} align="left">
            <a href="https://www.inventid.nl">www.inventid.nl</a><br />
            <a href="mailto:support@inventid.nl">support@inventid.nl</a><br />
            <a href="https://www.inventid.nl/docs/privacy-statement.pdf">Privacy Statement</a>
          </Text>
        </mj-column>
      </mj-section>
    )
  }
});

module.exports = Footer;
