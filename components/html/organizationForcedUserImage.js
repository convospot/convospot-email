'use strict';

var React = require('react');

var style = require('../style');
var PropTypes = require('../propTypes');
var translate = require('../translate');

var Envelope = require('./envelope');
var Salutation = require('./salutation');
var ActionButton = require('./actionButton');
var Text = require('./text');
var Greetings = require('./greetings');
var FullWidthSection = require('./fullWidthSection');

var organizationForcedUserImage = React.createClass({
  displayName: 'organizationForcedUserImage',


  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url()
  },

  getDefaultProps: function getDefaultProps() {
    return {
      lang: 'en'
    };
  },
  render: function render() {
    var personalPageButton = React.createElement(ActionButton, { primary: true,
      text: translate(this.props.lang, 'personalPage'),
      href: this.props.user.personal_href });

    return React.createElement(
      Envelope,
      { trackerUrl: this.props.tracker_url },
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Salutation, { name: this.props.user.name, lang: this.props.lang }),
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'organizationForcedUserImage')
        ),
        personalPageButton,
        React.createElement(
          Text,
          null,
          translate(this.props.lang, 'userImageRequirements')
        )
      ),
      React.createElement(
        FullWidthSection,
        null,
        React.createElement(Greetings, { lang: this.props.lang })
      )
    );
  }
});

module.exports = organizationForcedUserImage;