const handleAction = () => {
    console.log(`--> listing hosts ....`)


}

module.exports = (program) => program.command('list').action(handleAction)