const createRenderServer = require('maily');

const htmlComponents = require('./components/html/index');
const textComponents = require('./components/txt/index');

const log = (level, message) => console.log(JSON.stringify({level, message, datetime: (new Date()).toISOString()}));

const onReady = () => log('info', 'Server is ready');

const instance = createRenderServer(htmlComponents, textComponents, log).listen(3000, onReady);

process.on('SIGINT', () => instance.close(() => log('info', 'Service closed')));
