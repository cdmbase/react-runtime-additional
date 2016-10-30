var bunyan = require('bunyan');
var isMeteor = require('./util');

MyRawStream.prototype.write = function (rec) {
    console.log('[%s] %s: %s',
        rec.time.toISOString(),
        bunyan.nameFromLevel[rec.level],
        rec.msg);
}

const logger = bunyan.createLogger({
    name: 'app',
    stream: new MyRawStream(),
    type: 'raw',
    level: isMeteor() && Meteor.settings.public.loglevel || 'info'
});
module.exports = logger;