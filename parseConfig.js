module.exports.currentConfig = (function (){
    const config = process.argv.slice(2);
    const shortParameters = ['-c', '-i', '-o'];
    const fullParameters = ['--config', '--input', '--output'];

    const fullConfig = findParameterByKey(fullParameters);
    const shortConfig = findParameterByKey(shortParameters);

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