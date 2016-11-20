var bunyan = require('bunyan');
var isMeteor = require('./util');

var stream, level, type;

const app = process.env.APP_NAME || 'app';
if (process.env.NODE_ENV === "production") {
    //TODO: Get the  settings from Meteor.settings or node environment
    console.log("It is production");

    type = 'raw';
    level =  isMeteor() && Meteor.settings.public.logLevel || process.env.logLevel || 'info';
    stream = {
        type: 'rotation-file',
        path: `/var/log/${app}.log`,
        period: '1d',   // daily rotation
        count: 3        // keep 3 back copies    }
    }

} else {
    //stream = new PrettyStream(process.stdout);
    //type = 'raw';
    type = 'stream';
    stream = process.stdout;
    level =  isMeteor() && Meteor.settings.public.logLevel || process.env.logLevel || 'debug'
}
const logger = bunyan.createLogger({
        name: app,
        streams: [{
            level: level,
            type: type,
            stream: stream,
        }]
    }
)


module.exports = logger;
