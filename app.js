const express = require('express')
const checklistRouter = require('./src/routes/checklist')
const app = express()

app.use(express.json())
app.use('/checklists', checklistRouter)


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})