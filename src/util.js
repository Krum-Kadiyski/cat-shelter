const fs = require('fs/promises');
const path = require('path');

const searchBar = `
<form action="/search">
    <input type="text">
    <button type="button">Search</button>
</form>`;

async function readFile(filePath) {
  const fileHanle = await fs.open(path.join('./', filePath), 'r');
  return fileHanle.createReadStream();
}

async function readtemplate(template) {
  const data = await fs.readFile(path.join('./views', template + '.html'));
  return data.toString();
}

async function layout(body, hasSearch) {
  let layoutTemplate = await readtemplate('home/layout');
  let search = '';

  if (hasSearch) {
    search = searchBar;
  }

  layoutTemplate = layoutTemplate.replace('%%searchBar%%', search);

  return layoutTemplate.replace('%%body%%', body);
}

module.exports = {
  readFile,
  readtemplate,
  layout,
};
