const fs = require('fs')

module.exports = program => fs
    .readdirSync(__dirname)
    .filter(v => v !== 'index.js')
    .map(v => require(`./${v}`)(program))