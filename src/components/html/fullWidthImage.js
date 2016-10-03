const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');

const FullWidthImage = React.createClass({
  propTypes: {
    alt: React.PropTypes.string,
    src: PropTypes.url(true),
    paddingBottom: React.PropTypes.string,
    paddingTop: React.PropTypes.string,
    backgroundColor: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      alt: '',
      paddingBottom: `${style.distance.small}px`,
      paddingTop: `${style.distance.small}px`,
      backgroundColor: style.Colors.fullWhite
    }
  },

  render() {
    return (
      <mj-section padding="0px"
                  background-color={this.props.backgroundColor}
                  padding-top={this.props.paddingTop}
                  padding-bottom={this.props.paddingBottom}>
        <mj-column vertical-align="top"
                   width={style.width.full}>
          <mj-image src={this.props.src}
                    alt={this.props.alt}
                    align="center"
                    border="none"
                    padding-left="0"
                    padding-right="0"
                    padding-bottom="0"
                    padding-top="0" />
        </mj-column>
      </mj-section>);
  }
});

module.exports = FullWidthImage;
