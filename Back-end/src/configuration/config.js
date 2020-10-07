const express = require('express')
const app = express('')

app.set('port',process.env.PORT || 7000)
app.listen(app.get('port'),()=>
{console.log(`Server connect port ${app.get('port')}`)})
