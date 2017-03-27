const http = require('http')
const open = require('open')
const ecstatic = require('ecstatic')

const PORT = 3000;

http.createServer(
  ecstatic({ root: __dirname })
).listen(PORT);

open(`http://localhost:${PORT}`)

console.log(`Listening on :${PORT}`)