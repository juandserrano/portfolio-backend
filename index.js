const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const port = process.env.PORT || 3001
let connections = 1

app.get('/api', (req, res) => {
    
    console.log(connections + " connections")
    connections++
  res.json({
      "status": "200"
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})