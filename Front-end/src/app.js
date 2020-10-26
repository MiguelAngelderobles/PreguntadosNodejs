const express = require('express');
const app = express('');
const middlewareApp = require('./middleware/middleware');
const configurApp = require('./configuration/configuration');

configurApp(app);
middlewareApp(app,express);

app.use('/',require('./routes/index'));
