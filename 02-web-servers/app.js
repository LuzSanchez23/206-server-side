const http = require('http')
const fs = require('fs')
var PORT = 7500;

var quotes = [
    `Be the Reason Someone Smile Today`,
    `Never Stop Dreaming`,
    `Life is Beautiful`,
    `Everyday is a New Day`,
    `Make Happiness a Habit`

  ]
  var display = quotes[Math.floor(Math.random() * quotes.length)]
  
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('second.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File not Found')
        } else {
            res.write(data)
        }

        res.end(` ${display}`)
    })
})

server.listen(PORT, function (error) {
    if (error) {
        console.log('no bueno', error)
    } else {
        console.log('si bueno' + PORT)
    }
})


