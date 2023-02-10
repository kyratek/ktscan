const handleAction = (host) => {
    console.log(`--> adding host ${host}`)
}

const inject = (p) => {
    const add = p.command('add')

    add.argument('host')

    add.action(handleAction)

    return add
}

module.exports = inject