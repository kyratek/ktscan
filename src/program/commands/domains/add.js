const handleAction = (domain) => {
    console.log(`--> adding domain ${domain}`)
}

const inject = (p) => {
    const add = p.command('add')

    add.argument('domain')

    add.action(handleAction)

    return add
}

module.exports = inject