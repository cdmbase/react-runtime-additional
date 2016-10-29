import winston from 'winston';


// Define levels
var customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        auth: 3,
        verbose: 4,
        debug: 5,
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        auth: 'yellow',
        verbose: 'blue',
        debug: 'blue',
    }
};
let logger;

if (process.env.NODE_ENV === "development") {
    logger = new winston.Logger({
        transports: [
            new winston.transports.Console({
                name: 'console',
                timestamp: true,
                levels:customLevels.levels,
                colors:customLevels.colors,
                level: 'debug'
            })
        ]
    })
} else {
    //
    // Requiring `winston-papertrail` will expose
    // `winston.transports.Papertrail`
    //
    require('winston-papertrail').Papertrail;
    // To add Winston_Papertrail
    //TODO: Get the papertrail settings from Meteor.settings
    logger = new winston.Logger({
        transports: [
            new winston.transports.Papertrail({
                levels: customLevels.levels,
                colors: customLevels.colors,
                host: 'logs3.papertrailapp.com',
                port: '21596',
                level: Meteor.settings.loglevel || 'debug',
                handleExceptions: true,
                json: true,
                colorize: true,
                logFormat: function (level, message) {
                    return level + ': ' + message;
                }
            })
        ]
    })

}

module.exports =  logger;
