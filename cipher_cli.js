const {currentConfig} = require('./parseConfig');
const {doConfig} = require('./consoleStreams');

const myConfig = currentConfig(process.argv.slice(2))
doConfig(myConfig);

const fs = require('fs');
