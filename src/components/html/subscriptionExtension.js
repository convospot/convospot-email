const React = require('react');
const moment = require('moment-timezone');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');

const Envelope = require('./envelope');
const FullWidthImage = require('./fullWidthImage');
const Salutation = require('./salutation');
const Text = require('./text');
const Table = require('./table');
const Greetings = require('./greetings');
const Divider = require('./divider');
const FullWidthSection = require('./fullWidthSection');

const subscriptionExtension = React.createClass({

  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    order_products: React.PropTypes.arrayOf(PropTypes.subscription).isRequired,
    tracker_url: PropTypes.url()
  },

  orderProductToFields(orderProduct, tz) {
    const date = moment(orderProduct.expires_at).tz(tz).format('DD-MM-YYYY');
    const code = orderProduct.code ? orderProduct.code : translate(this.props.lang, 'unknownTicketCode');
    return [orderProduct.name, date, code];
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const eventImage = this.props.event.image_url ? <FullWidthImage alt={this.props.event.name}
                                                                    src={this.props.event.image_url}
                                                                    paddingBottom={`${style.distance.large}px`} /> : null;
    const products = this.props.order_products.map((op) => this.orderProductToFields(op, this.props.event.timezone));
    const headers = [
      {name: translate(this.props.lang, 'product')},
      {name:translate(this.props.lang, 'validTo')},
      {name:translate(this.props.lang, 'ticketCode')}
    ];

    return (
      <Envelope showHeaderDivider={eventImage ? false : true} trackerUrl={this.props.tracker_url}>
        {eventImage}
        <FullWidthSection>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
        </FullWidthSection>
        <FullWidthSection paddingTop={`${style.distance.medium}px`}>
          <Text>
            {translate(this.props.lang, 'subscriptionSummary', {eventDate: this.props.event.name})}
          </Text>
          <Table fields={headers} values={products} />
        </FullWidthSection>
        <FullWidthSection>
          <Greetings lang={this.props.lang} />
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = subscriptionExtension;
