const { readtemplate, layout } = require('../util');

async function addBreedHandler(req, res) {
  const template = await readtemplate('addBreed');

  res.writeHead(200, ['Content-type', 'text/html']);
  res.write(await layout(template));
  res.end();
}

async function postBreedHandler(req, res) {
  let data = '';
  req.on('data', (chunk) => (data += chunk.toString()));
  req.on('end', () => {
    //todo
    console.log(new URLSearchParams(data));
  });

  res.statusCode = 204;
  res.end();
}

module.exports = {
  addBreedHandler,
  postBreedHandler,
};
