var logger = require('./index');

logger.info('Testing logger info');


var loggerClient = require('./src/client');

console.log("Testing -- Client");
loggerClient.info("Testing logger info");
loggerClient.debug("Testing logger debug");


var loggerServer = require('./src/server');

console.log("Testing -- Server");
loggerServer.info("Testing logger server info");
loggerServer.debug("Testing logger server debug");