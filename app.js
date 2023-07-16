const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'views')))

app.use(express.json())

app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.render('sample')
})


const User = require('./conn')

app.post('/', async (req, res) => {
    const data = new User(req.body)
    await data.save()
    res.send('Data Saved')
})

app.listen(3000, () => {
    console.log(`Server has started at port http://localhost:${port}`)
})
