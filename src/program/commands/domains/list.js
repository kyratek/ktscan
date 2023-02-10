const handleAction = () => {
    console.log(`--> listing domains ....`)


}

module.exports = (program) => program.command('list').action(handleAction)