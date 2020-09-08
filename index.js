const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {	
  let to, meaning, of, life
  to = meaning = of = life = 10.5;
  const answer = to + meaning + of + life;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
