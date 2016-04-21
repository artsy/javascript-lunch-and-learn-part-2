const app = require('express')()

var num = 0

app.get('/', (req, res) => {
  const n = num += 1
  setTimeout(() =>
    res.send('Hello number ' + n), 1000)
})

app.listen(5000, () => console.log('Listening on 5000'))
