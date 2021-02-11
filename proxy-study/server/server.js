http = require('http')

http.createServer(function (req, res) {
  if (req.url === '/cars') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const cars = [
      {brand: 'Mazida', name: 'Mazida3'},
      {brand: 'BMW', name: '325li'},
      {brand: 'Honda', name: 'Civic'},
    ]

    res.end(JSON.stringify(cars))
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end('OK')
  }
}).listen(9007)

console.log('Server is running on port 9007 ...')