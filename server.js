const dataWeb = require('./data.js');
const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log('request received');
  res.end(`
  <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UFO's in our turf</title>
</head>
<body>
    <h1>${dataWeb.title}</h1>
    <h2>${dataWeb.subtitle}</h2>
    <p>${dataWeb.description}</p>
</body>
</html>
  `);
});

server.listen(0, () => {
  console.log(`server listening on port ${server.address().port}`);
});
