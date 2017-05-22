const convict = require('convict');

// Define a schema
let conf = convict({
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 10011,
    env: 'PORT'
  },
  dataFile: {
    doc: 'The postal codes data file to use',
    format: String,
    default: '',
    env: 'DATA_FILE'
  }
});

conf.loadFile('./config/config.json');

// Perform validation
conf.validate({allowed: 'strict'});

module.exports = conf;
