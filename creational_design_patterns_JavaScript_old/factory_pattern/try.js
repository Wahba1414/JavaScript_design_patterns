// Import the super class.
var Transport_Factory = require('./transport_factory');

var shipTransprt = Transport_Factory('Ship');
var trainTransport = Transport_Factory('Train');

shipTransprt.deliver();
trainTransport.deliver();
