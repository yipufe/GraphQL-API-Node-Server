import express from 'express'
import path from 'path'
import pageRoutes from './routes/pages.route'
import bodyParser from 'body-parser'    //multer also works
import {getError} from './controllers/error.controller'
import session from 'express-session'
import mongoose from 'mongoose'

//import {mongoConnect} from './util/database'

//npm install --save csurf
//Package to help prevent scrf attacks

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')   // '*' is wild card and will allow any cross domain access
    //res.setHeader('Access-Control-Allow-Origin', 'someDomain, moreDomains')

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use(express.static(path.join(__dirname, 'public')))
//secret <- For the HASH, should be a long value for production
//resave <- Session will not be saved on every session, only on changes
//saveUninitialized <- if false session cookie will not be set unless the session is modified
app.use(session({secret: 'some secret hash', resave: false, saveUninitialized: false}))
app.use('/', pageRoutes)
app.use(getError)

const port = 5000
/*
mongoConnect(() => {
    app.listen(port, () => {
        console.log(`Server is up and running on port ${port}`)
    })
})*/
mongoose.connect('mongodb+srv://thatoneguy:12345xyz@dgm-cluster-fu5qw.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
        app.listen(port)
    })
    .catch(err => {
        console.log(err)
    })
