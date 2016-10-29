var bunyan = require('bunyan');


// function prepend(argument) {
//     return function() {
//         var arg = [].slice.call(arguments);
//         args.unshift(argument);
//         console.log.apply(console, args);
//     }
// }

// var logger = exports = {
//     info: console.log,
//     warn: prepend("⚠️"),
//     error: prepend("☠️"),
//     debug: console.log,
//     verbose: console.log
// }

logger = bunyan.createLogger({
    name: 'app',
    stream: process.stdout,
    level: 'debug'
});

module.exports = logger;