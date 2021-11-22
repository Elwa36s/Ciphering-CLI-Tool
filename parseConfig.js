const {validateConfig} = require('./validateConfig');
module.exports.currentConfig = (config) => {
    const shortParameters = ['-c', '-i', '-o'];
    const fullParameters = ['--config', '--input', '--output'];

    const fullConfig = findParameterByKey(fullParameters);
    const shortConfig = findParameterByKey(shortParameters);

    try{
        if ((shortConfig['-c'] && fullConfig['--config']) || (shortConfig['-i'] && fullConfig['--input']) || (shortConfig['-o'] && fullConfig['--output'])) throw 'Incorrect config. Avoid duplicate parameters.'
        if (config.indexOf('-c') !== config.lastIndexOf('-c') || config.lastIndexOf('--config') !== config.indexOf('--config')) throw 'You provided -c argument more than once.'
        } catch(error) {
            process.stderr._write(error)
            process.exit(1)
    }

    const result = {
        c: shortConfig['-c'] || fullConfig['--config'],
        i: shortConfig['-i'] || fullConfig['--input'],
        o: shortConfig['-o'] || fullConfig['--output'],
    };

    validateConfig(result.c);

    return result;

    function findParameterByKey(parameterArray){
        return parameterArray.reduce((acc, parameter) => {
            acc[parameter] = config.indexOf(parameter) === -1 ? undefined : config[config.indexOf(parameter) + 1];
        return acc;
        }, {});
    }
}