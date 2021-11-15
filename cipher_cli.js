const {currentConfig} = require('./parseConfig');
const {doConfig} = require('./consoleStreams');

doConfig(currentConfig);

const fs = require('fs');
