const React = require('react');

const Text = require('./text');

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
      <div>
        <Text>
          inventid<br />
          Burgwal 47<br />
          2611GG Delft<br />
        </Text>

        <Text>
          www.inventid.nl<br />
          support@inventid.nl<br />
          Privacy Statement (https://www.inventid.nl/docs/privacy-statement.pdf)
        </Text>
      </div>
    )
  }
});

module.exports = Footer;
