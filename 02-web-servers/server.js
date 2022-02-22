const http = require('http')
const fs = require('fs')
var PORT = 7000;

const server = http.createServer(function(req, res) {
res.writeHead(200, { 'Content-Type': 'text/html'})
fs.readFile('index.html', function(error, data) {
  if (error) {
    res.writeHead(404)
    res.write('Error: File not Found')
  } else {
    res.write(data)
  }

res.end()
})
})

server.listen(PORT, function(error) {
  if (error) {
    console.log ('no bueno' ,error)
  } else {
    console.log('si bueno' + PORT)
  }
})


