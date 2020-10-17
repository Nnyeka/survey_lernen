// keys to figure out what set to credentials to use
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}