const http = require('http');
const answer = require('./answer');

const server = http.createServer((req, res) => {
  const question = req.url;
  console.log(question);

  const result = answer(question);
  res.end(result);
});

server.listen(process.env.PORT);
