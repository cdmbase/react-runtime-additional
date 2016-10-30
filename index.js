var isBrowser=new Function("try {return this===window;}catch(e){ return false;}");

var isNode=new Function("try {return this===global;}catch(e){return false;}");


if(isBrowser()){
    var logger = require('./src/client.js')
} else if(isNode()){
    var logger = require('./src/server')
}
module.exports = logger;
