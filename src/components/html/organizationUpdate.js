const React = require('react');

const style = require('../style');
const PropTypes = require('../propTypes');
const translate = require('../translate');
const transform = require('../transform');

const Envelope = require('./envelope');
const Salutation = require('./salutation');
const Text = require('./text');
const Greetings = require('./greetings');
const FullWidthSection = require('./fullWidthSection');
const Divider = require('./divider');
const Table = require('./table');

const OrganizationUpdate = React.createClass({

  propTypes: {
    user: PropTypes.user.isRequired,
    lang: PropTypes.lang.isRequired,
    tracker_url: PropTypes.url(),
    startDate: React.PropTypes.string.isRequired,
    endDate: React.PropTypes.string.isRequired,
    events: React.PropTypes.arrayOf(PropTypes.eventSales).isRequired
  },

  getDefaultProps() {
    return {
      lang: 'en'
    }
  },

  render() {
    const fields = [
      {name: translate(this.props.lang, 'product'), width: style.width.half},
      {name: translate(this.props.lang, 'quantity'),width: style.width.quarter},
      {name: translate(this.props.lang, 'revenue'), width: style.width.quarter}
    ];
    const events = this.props.events.map(e => {
      const totalRevenue = transform.intToCurrency(e.products.reduce((val, product) => val + product.revenue, 0));
      const tableValues = e.products.map(e => [e.name, `${e.quantity}x`, transform.intToCurrency(e.revenue)]);
      return (<FullWidthSection paddingTop={`${style.distance.medium}px`}>
          <Text>
            {translate(this.props.lang, 'eventRevenue', {eventName: e.event.name, totalRevenue})}
          </Text>
          <Table fields={fields}
                 values={tableValues} />
        </FullWidthSection>
      );
    });
    
    return (
      <Envelope trackerUrl={this.props.tracker_url}>
        <FullWidthSection>
          <Salutation name={this.props.user.name} lang={this.props.lang} />
          <Text>
            {translate(this.props.lang, 'organizationUpdateSales', {startDate: this.props.startDate, endDate: this.props.endDate})}
          </Text>
          <Greetings lang={this.props.lang} />
        </FullWidthSection>
        <FullWidthSection paddingTop={`${style.distance.medium}px`}>
          <Divider />
        </FullWidthSection>
        {events}
      </Envelope>
    );
  }
});

module.exports = OrganizationUpdate;
