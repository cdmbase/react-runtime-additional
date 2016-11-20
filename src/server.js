var bunyan = require('bunyan');
var isMeteor = require('./util');

var  level, streams;

const app = process.env.APP_NAME || 'app';
if (process.env.NODE_ENV === "production") {
    //TODO: Get the  settings from Meteor.settings or node environment
    console.log("It is production");

    level =  isMeteor() && Meteor.settings.public.logLevel || process.env.logLevel || 'info';
    streams = [{
        type: 'rotating-file',
        path: `${app}.log`,
        period: '1d',   // daily rotation
        count: 3        // keep 3 back copies    }
    }]

} else {
    //stream = new PrettyStream(process.stdout);
    //type = 'raw';
    level =  isMeteor() && Meteor.settings.public.logLevel || process.env.logLevel || 'debug';
    streams =  [{
        level: level,
        type: 'stream',
        stream: process.stdout,
    }]
}
const logger = bunyan.createLogger({
        name: app,
        streams: streams
    }
)


module.exports = logger;
