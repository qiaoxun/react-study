http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  const cars = [
    {brand: 'Mazida', name: 'Mazida3'},
    {brand: 'BMW', name: '325li'},
    {brand: 'Honda', name: 'Civic'},
  ]

  res.end(JSON.stringify(cars))
}).listen(9007)

console.log('Server is running on port 9007 ...')