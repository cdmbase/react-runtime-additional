var isBrowser=new Function("try {return this===window;}catch(e){ return false;}");

var isNode=new Function("try {return this===global;}catch(e){return false;}");


if(isBrowser()){
    module.exports = require('./src/client.js');
} else if(isNode()){
    module.exports = require('./src/server')
}
