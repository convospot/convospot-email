const React = require('react');

const PropTypes = require('../propTypes');
const translate = require('../translate');

const Salutation = require('./salutation');
const ActionButton = require('./actionButton');
const Text = require('./text');
const Greetings = require('./greetings');
const Envelope = require('./envelope');

const OrderReminder = React.createClass({
  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const downloadEticketButton = <ActionButton primary={true} text={translate(this.props.lang, 'downloadTicket')} href={this.props.user.downloads_href} />;

    return (
      <Envelope>
        <Salutation name={this.props.user.name} lang={this.props.lang} />
        <Text>{translate(this.props.lang, 'orderReminder', {eventName: this.props.event.name})}</Text>

        {downloadEticketButton}

        <Greetings lang={this.props.lang} />
      </Envelope>
    );
  }
});

module.exports = OrderReminder;
