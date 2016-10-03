const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');

const Header = require('./header');
const Contact = require('./contact');
const Social = require('./social');
const OpenTracker = require('./openTracker');

const Envelope = React.createClass({

  propTypes: {
    children: React.PropTypes.node.isRequired,
    showHeaderDivider: React.PropTypes.bool,
    trackerUrl: PropTypes.url()
  },

  getDefaultProps() {
    return {
      showHeaderDivider: true
    };
  },

  render() {
    const tracker = this.props.trackerUrl ? (<OpenTracker url={this.props.trackerUrl} />) : null;
    return (
      <mjml>
          <mj-head>
          <mj-font name="Open Sans"
                   href="https://fonts.googleapis.com/css?family=Open+Sans:300,400"/>
          <mj-attributes>
              <mj-all font-family="Open Sans, Ubuntu, sans-serif"/>
          </mj-attributes>
      </mj-head>
        <mj-body>
          <mj-container background-color={style.Colors.background} width="500px">
              <mj-spacer height={`${style.distance.medium}px`} />
              <Header showDivider={this.props.showHeaderDivider} />
              {this.props.children}
              <Contact />
              <Social />
              {tracker}
              <mj-spacer height={`${style.distance.medium}px`} />
          </mj-container>
        </mj-body>
      </mjml>
    );
  }
});

module.exports = Envelope;
