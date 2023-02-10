const { createCommand } = require('commander')

const app = createCommand('kt')

const domains = app.command('domains').description('Manage domains in the database.')

const listDomains = domains.command('list').action(() => {
   console.log(`--> listing all domains`)
})

const addDomain = domains.command('add').argument('domain')
	.description('Add a domain name to the database.')
	.action((domain) => {
   		console.log(`-> adding domain ${domain}`)
	})

module.exports = args => app.parse(args || process.argv)
