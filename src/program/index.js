const { createCommand } = require('commander')

const program = createCommand('kt')

require('./commands')(program)

module.exports = args => program.parse(args || process.argv)