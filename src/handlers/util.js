const fs = require('fs/promises');
const path = require('path');

async function readFile(filePath) {
  const fileHanle = await fs.open(path.join('./', filePath), 'r');
  return fileHanle.createReadStream();
}

async function readtemplate(template) {
  const data = await fs.readFile(path.join('./views', template + '.html'));
  return data.toString();
}

module.exports = {
  readFile,
  readtemplate,
};
