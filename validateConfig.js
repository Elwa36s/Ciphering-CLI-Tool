module.exports.validateConfig = (config) => {
    // const availableCodes = [67,82];
    try {
        config.split('-').forEach(element => {
            if (element.length < 2 && element !== 'A') throw 'Incorrect config. Only "A" could be without number key.'
            if (element.length > 2) throw 'Incorrect config. Each step should contain 2 symbols or 1 in case of using "A".'
            if (element.length === 2 && ((element[0] !== 'C') && (element[0] !== 'R'))) throw 'Incorrect config. Only "A", "C", "R" are available.'
        });
    } catch(error) {
        process.stderr._write(error)
        process.exit(1)
    }
    return config.split('-')
}
// availableCodes.indexOf(element[0].charCodeAt()) === -1)