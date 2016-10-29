var bunyan = require('bunyan');


var logger;

if (process.env.NODE_ENV === "production") {
    //TODO: Get the  settings from Meteor.settings or node environment
    var bsyslog = require('bunyan-syslog');

    logger = bunyan.createLogger({
        name: 'app',
        streams: [{
            level: 'info',
            type: 'raw',
            stream: bsyslog.createBunyanStream({
                type: 'sys',
                facility: bsyslog.local0,
                host: 'logs3.papertrailapp.com',
                port: '21596'
            })
        }]
        }
    )

} else {
    logger = bunyan.createLogger({
        name: 'app',
        stream: process.stdout,
        level: 'debug'
    });
}

module.exports = logger;
