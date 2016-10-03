'use strict';

var React = require('react');
var urlValidator = require('valid-url');

var validUrl = function validUrl() {
  var required = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

  return function (props, propName, componentName) {
    if (!required) {
      if (!urlValidator.isUri(props[propName])) {
        console.warn('Invalid prop ' + propName + ' supplied to ' + componentName + '. Validation failed.');
      }
      return null;
    }
    if (!urlValidator.isUri(props[propName])) {
      return new Error('Invalid prop ' + propName + ' supplied to ' + componentName + '. Validation failed.');
    }
    return null;
  };
};

var productQuantity = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  quantity: React.PropTypes.number.isRequired,
  eticket: React.PropTypes.bool.isRequired
});
var event = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  image_url: validUrl(),
  agreement: React.PropTypes.string
});

module.exports = {
  lang: React.PropTypes.oneOf(['nl', 'en']),
  user: React.PropTypes.shape({
    id: React.PropTypes.id,
    name: React.PropTypes.string.isRequired,
    email_address: React.PropTypes.email_address,
    downloads_href: validUrl(),
    personal_href: validUrl()
  }),
  order: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired
  }),
  event: event,
  organization: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  }),
  url: validUrl,
  productQuantity: productQuantity,
  subscription: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    code: React.PropTypes.string,
    expires_at: React.PropTypes.string.isRequired
  }),
  eventSales: React.PropTypes.shape({
    event: event,
    products: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      quantity: React.PropTypes.number.isRequired,
      revenue: React.PropTypes.number.isRequired
    })).isRequired
  })
};