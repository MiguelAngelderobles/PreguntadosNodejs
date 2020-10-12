const express = require('express')
const app = express('')
const configApp = require('./configurations/config')
const middlewareApp = require('./middlewares/middlewares')
const updatabase = require('./database/database')

configApp(app)
updatabase()
middlewareApp(app)


app.use('/', require('./routes/index'));
