const { Entity, Schema } = require("redis-om");
const { useDatabaseClient } = require("../client");

class Domain extends Entity {}

const domainSchema = new Schema(Domain, {
    label: { type: 'string' },
})

const useDomains = async () => {
    const client = await useDatabaseClient()

    const domainRepository = client.fetchRepository(domainSchema)

    await domainRepository.createIndex()

    return domainRepository
}

module.exports = { useDomains }