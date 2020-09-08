const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const answer = 42;
  res.send('Hello World! The meaning of life is: ' + answer)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
