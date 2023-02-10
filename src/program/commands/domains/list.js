const { useDomains } = require("../../../database/models/domain")

const handleAction = async () => {
    console.log(`--> listing domains ....`)

    const domainsApi = await useDomains()

    const allDomains = await domainsApi.search().return.all()

    for (const domain of allDomains) {
        console.log(`${domain.id} --> ${domain.name}`)
    }
}

module.exports = (program) => program.command('list').action(handleAction)