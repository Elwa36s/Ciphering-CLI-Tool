module.exports.currentConfig = (function (){
    const config = process.argv.slice(2);
    const shortParameters = ['-c', '-i', '-o'];
    const fullParameters = ['--config', '--input', '--output'];

    const fullConfig = findParameterByKey(fullParameters);
    const shortConfig = findParameterByKey(shortParameters);

    try{
        if ((shortConfig['-c'] && fullConfig['--config']) || (shortConfig['-i'] && fullConfig['--input']) || (shortConfig['-o'] && fullConfig['--output'])) throw 'Incorrect config. Avoid duplicate parameters.'
        } catch(error) {
            process.stderr._write(error)
            process.exit(1)
    }

    return {
        c: shortConfig['-c'] || fullConfig['--config'],
        i: shortConfig['-i'] || fullConfig['--input'],
        o: shortConfig['-o'] || fullConfig['--output'],
    };

    function findParameterByKey(parameterArray){
        return parameterArray.reduce((acc, parameter) => {
            acc[parameter] = config.indexOf(parameter) === -1 ? undefined : config[config.indexOf(parameter) + 1];
        return acc;
        }, {});
    }

})()