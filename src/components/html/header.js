const React = require('react');

const PropTypes = require('../propTypes');
const style = require('../style');

const Divider = require('./divider');

const Header = React.createClass({

  propTypes: {
    href: PropTypes.url(),
    src: PropTypes.url(),
    alt: React.PropTypes.string,
    showDivider: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      showDivider: true,
      href: 'https://www.inventid.nl',
      src: 'https://cdn.inventid.nl/assets/logo-horizontally-f109689e93644fa7d210444da73a0918.png',
      alt: 'inventid'
    };
  },

  render() {
    const divider = this.props.showDivider ? <Divider /> : null;
    return (
      <mj-section background-color={style.Colors.fullWhite}
                  padding-top={style.distance.medium}
                  padding-left="0px"
                  padding-right="0px"
                  padding-bottom={style.distance.small}>
        <mj-column vertical-align="top" width={style.width.full}>
          <mj-image href={this.props.href}
                    src={this.props.src}
                    alt={this.props.alt}
                    align="center"
                    border="none"
                    width="148px"
                    padding-left="0"
                    padding-right="0"
                    padding-bottom={divider ? `${style.distance.medium}px` : "0px" }
                    padding-top="0" />
          {divider}
        </mj-column>
      </mj-section>
    )
  }
});

module.exports = Header;
