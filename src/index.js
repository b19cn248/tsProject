const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const path = require('path')
const bodyParser = require('body-parser');
const port = 3000

const route = require('./routes')

// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.urlencoded({
  extended: true
}));


app.engine('hbs', handlebars.engine({
  defaultLayout: 'main',
  extname: '.hbs'
}));


app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'))

// console.log('PATH: ', path.join(__dirname, 'views'))

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})