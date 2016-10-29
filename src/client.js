

function prepend(argument) {
    return function() {
        var arg = [].slice.call(arguments);
        args.unshift(argument);
        console.log.apply(console, args);
    }
}

var logger = exports = {
    info: console.log,
    warn: prepend("⚠️"),
    error: prepend("☠️"),
    debug: console.log,
    verbose: console.log
}

module.exports = logger;