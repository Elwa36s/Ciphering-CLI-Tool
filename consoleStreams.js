const fs = require('fs');
const {selectCifer} = require('./selectCifer');

module.exports.doConfig = (config) => {
  const {i, o, c} = config;

  if (o){
    fs.createReadStream(o).on('error', (error) => {
      process.stderr._write("File doesn't exist or wrong path");
      process.exit(3);
    })
  }

  const reader = i ? fs.createReadStream(i, 'utf-8') : process.stdin;
  const writer = o ? fs.createWriteStream(o, { flags: 'a', encoding: 'utf-8'}) : process.stdout;

  reader.on('error', (error) => {
    process.stderr._write(error.message);
    process.exit(3);
  })

  const ArrayOfStreams = c.split('-').map(step => selectCifer(step));

  for (let i = 0; i < ArrayOfStreams.length; i++){
    if (i === 0) {
      reader.pipe(ArrayOfStreams[i])
    }
    if (i === ArrayOfStreams.length - 1){
      ArrayOfStreams[i].pipe(writer)
    }
    if (i !== ArrayOfStreams.length - 1){
      ArrayOfStreams[i].pipe(ArrayOfStreams[i + 1])
    }
  }
}