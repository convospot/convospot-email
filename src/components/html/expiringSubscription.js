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
const ActionButton = require('./actionButton');
const FullWidthSection = require('./fullWidthSection');

const expiringSubscription = React.createClass({

  propTypes: {
    event: PropTypes.event.isRequired,
    user: PropTypes.user.isRequired,
    order: PropTypes.order.isRequired,
    lang: PropTypes.lang.isRequired,
    order_products: React.PropTypes.arrayOf(PropTypes.subscription).isRequired,
    tracker_url: PropTypes.url(),
    renewal_href: React.PropTypes.string
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
    const products = [this.orderProductToFields(this.props.order_product, this.props.event.timezone)];
    const headers = [
      {name: translate(this.props.lang, 'product')},
      {name:translate(this.props.lang, 'validTo')},
      {name:translate(this.props.lang, 'ticketCode')}
    ];

    const extendSubscription = this.props.renewal_href ? (
    	<FullWidthSection>
            <ActionButton primary={true}
                          href={this.props.renewal_href}
                          text={translate(this.props.lang, 'extendSubscriptionButton')}/>
        </FullWidthSection>) : null;

    return (
      <Envelope showHeaderDivider={eventImage ? false : true} trackerUrl={this.props.tracker_url}>
        {eventImage}
        <FullWidthSection>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
        </FullWidthSection>
        <FullWidthSection paddingTop={`${style.distance.medium}px`}>
          <Text>
            {translate(this.props.lang, 'expiringSubscription', {eventName: this.props.event.name})}
          </Text>
          <Table fields={headers} values={products} />
        </FullWidthSection>
        {extendSubscription}
        <FullWidthSection>
          <Greetings lang={this.props.lang} />
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = expiringSubscription;
