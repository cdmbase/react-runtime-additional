

function prepend(argument) {
    return function() {
        let arg = [].slice.call(arguments);
        args.unshift(argument);
        console.log.apply(console, args);
    }
}

export const logger = {
    info: console.log,
    warn: prepend("⚠️"),
    error: prepend("☠️"),
    debug: console.log,
    verbose: console.log
}

export default logger;