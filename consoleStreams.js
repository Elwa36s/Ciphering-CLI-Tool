const {pipeline} = require('stream');

const readStream = process.stdin;
const writeStream = process.stdout;


pipeline(readStream, writeStream, err => console.log(err))