const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const path = require('path')
const port = 3000

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, '/public')))

app.engine('hbs', handlebars.engine({
  defaultLayout: 'main',
  extname: '.hbs'
}));


app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'))

console.log('PATH: ', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})