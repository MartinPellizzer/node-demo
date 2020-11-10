const bodyParser = require('body-parser')

const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/add-product', (req, res, next) => {
    console.log('in another middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    console.log('in another middleware')
    res.send('<h1>This is a title</h1>')
})

app.listen(3000)