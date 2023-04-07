
const express = require('express')

// Establishing Connection with MongoDB

const app = express()
const port = 6000

app.use(express.json())

// Creating Routes for each different paths
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));

app.use('/api/bitcoin', require('./routes/bitcoin'));



app.listen(port, () => {
  console.log(`App listening on port: http://localhost:${port}`)
})