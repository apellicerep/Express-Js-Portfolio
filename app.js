const express = require('express')
const routes = require('./routes/index')
const { noRoute } = require('./errorHandler.js')
const { globalError } = require('./errorHandler.js')


const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'))
app.use('/', routes)
app.use(noRoute)
app.use(globalError)


app.listen(3000, () => { console.log("app listening at port 3000") })


