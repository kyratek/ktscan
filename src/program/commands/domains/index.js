const requireDir = require('require-dir')

module.exports = (program) => {
    const cmd = program.command('domains')

    const subcommands = requireDir('.')

    for (const subcommand of Object.keys(subcommands)) {
        subcommands[subcommand](cmd)
    }

    return cmd
}