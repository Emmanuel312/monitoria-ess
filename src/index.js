const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/monitoriaEss', 
{ useNewUrlParser: true, useUnifiedTopology: true })


app.use(express.json())

app.use(require('./routes'))
app.listen(3000, () => console.log('server on port 3000'))