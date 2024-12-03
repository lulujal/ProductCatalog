require('dotenv').config()
process.env.NODE_ENV = 'development'
const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const router = require('./routers/index.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', './views/pages')
app.use(express.static(path.join(__dirname, 'public')));

app.use(router)

app.listen(2542, () => {
    console.log(`App listening at http://localhost:2542`)
})
