const express = require('express');
const router = require('./routes/routes')
const app = express();
require('./models/db')

app.use('/api/tasks', router)
app.listen('8000', err => {
    if(err) console.log(err)
    console.log('Server is started at PORT number : 8000');
})