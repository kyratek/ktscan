const { useDomains } = require("../../../database/models/domain")

const handleAction = async (domain) => {
    console.log(`--> adding domain ${domain}`)

    const domainsApi = await useDomains()

    const newDomain = domainsApi.createEntity({
        name: domain,
    })

    const newDomainId = await newDomain.save()

    console.log(`--> domain saved with id ${newDomainId}`)

    return newDomainId
}

const inject = (p) => {
    const add = p.command('add')

    add.argument('domain')

    add.action(handleAction)

    return add
}

module.exports = inject