const config = process.argv.slice(2);
const currentConfig = ['-c', '-i', '-o'].reduce((acc, parameter) => {
    acc[parameter[1]] = config.indexOf(parameter) === -1 ? undefined : config[config.indexOf(parameter) + 1];
    return acc;
}, {})

console.dir(currentConfig);