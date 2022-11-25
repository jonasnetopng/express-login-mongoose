const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app
.use(bodyParser.json())
.use(cors())

require('./src/routes/register')(app)
require('./src/routes/login')(app)

app.listen(port, () => console.log(`Running on http://localhost:${port}`))