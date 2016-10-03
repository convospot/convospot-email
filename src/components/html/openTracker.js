const React = require('react');

const PropTypes = require('../propTypes');
const style = require('../style');

const OpenTracker = React.createClass({
  propTypes: {
    url: PropTypes.url(true)
  },

  render() {
    return (
      <mj-section padding-top={`${style.distance.medium}px`}
                  padding-left="0px"
                  padding-right="0px"
                  padding-bottom={`${style.distance.small}px`}>
        <mj-column vertical-align="top" width={style.width.full}>
          <mj-image src={this.props.url}
                    align="center"
                    border="none"
                    width="1px"
                    padding-left="0"
                    padding-right="0"
                    padding-bottom="0px"
                    padding-top="0" />
        </mj-column>
      </mj-section>
    )
  }
});

module.exports = OpenTracker;
