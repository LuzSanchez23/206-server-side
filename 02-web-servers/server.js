// ===============================DEPENDENCIES======================================

const express = require('express')
const app = express()
const PORT = 7000


// ===============================Basic Route======================================

app.get('/', (req, res) => {
  res.send('Hello')
})


// =====================================Start Server==========================


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

  