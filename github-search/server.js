http = require('http')

http.createServer(function (req, res) {
  console.log(req.url)
  if (req.url.indexOf('/cars') > -1) {

    let queryValue = ''

    const urlSplitByQuestionMark = req.url.split('?')
    if (urlSplitByQuestionMark && urlSplitByQuestionMark.length === 2) {
      const params = urlSplitByQuestionMark[1]
      const paramsSplitByAndMark = params.split('&')
      for (const keyAndValue of paramsSplitByAndMark) {
        console.log('keyAndValue = ' + keyAndValue)
        if (keyAndValue.indexOf('name=') > -1) {
          queryValue = keyAndValue.split('=')[1]
        }
      }
    }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    let cars = [
      {brand: 'Mazida', name: 'Mazida3'},
      {brand: 'BMW', name: '325li'},
      {brand: 'Honda', name: 'Civic'},
    ]

    if (queryValue && queryValue !== 'undefined')
      cars = cars.filter(car => car.name.indexOf(queryValue) > -1)

    console.log('queryValue is ' + queryValue)

    res.end(JSON.stringify(cars))
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end('OK')
  }
}).listen(9007)

console.log('Server is running on port 9007 ...')