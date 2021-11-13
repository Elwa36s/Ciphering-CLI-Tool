const {currentConfig} = require('./parseConfig');
console.dir(currentConfig);

const {validateConfig} = require('./validateConfig');
console.log(validateConfig(currentConfig.c))

const {selectCifer} = require('./selectCifer');
console.log(selectCifer(currentConfig.c))

const fs = require('fs');
