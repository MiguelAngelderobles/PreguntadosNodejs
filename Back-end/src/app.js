const express = require('express')
const app = express('')

require('./database/database');
require('./middlewares/middleware')
require('./configuration/config')


// app.use('/', require('./routes/index'));
app.use('/', require('./routes/perfil'));




