var bunyan = require('bunyan');
var PrettyStream = require('bunyan-prettystream');
var isMeteor = require('./util');

var stream, level, type;


if (process.env.NODE_ENV === "production") {
    //TODO: Get the  settings from Meteor.settings or node environment
    console.log("It is production");
    var bsyslog = require('bunyan-syslog');

    type = 'raw';
    level =  isMeteor() && Meteor.settings.public.logLevel || process.env.logLevel || 'info';

    stream = bsyslog.createBunyanStream({
        type: 'sys',
        facility: bsyslog.local0,
        host: 'logs3.papertrailapp.com',
        port: '21596'
    })

} else {
    //stream = new PrettyStream(process.stdout);
    //type = 'raw';
    type = 'stream';
    stream = process.stdout;
    level =  isMeteor() && Meteor.settings.public.logLevel || process.env.logLevel || 'debug'
}
const logger = bunyan.createLogger({
        name: 'app',
        streams: [{
            level: level,
            type: type,
            stream: stream
        }]
    }
)


module.exports = logger;
