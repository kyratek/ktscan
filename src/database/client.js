const { Client } = require('redis-om')
const { redisUrl } = require('../config')

let client = null

const useDatabaseClient = async () => {
    if (client === null) {
        client = new Client()

        await client.open(redisUrl)
    }

    return client
}

module.exports = { useDatabaseClient }