import express from 'express'
import path from 'path'
import pageRoutes from './routes/pages.route'
import bodyParser from 'body-parser'
import {getError} from './controllers/error.controller'
import mongoose from 'mongoose'


const app = express()

//Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//Cross origin settings
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
  
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

//Serve files in the public dirrectory
app.use(express.static(path.join(__dirname, 'public')))

//Serve routes
app.use('/', pageRoutes)

//Serve error route
app.use(getError)

//Port to serve on
const port = 5000

//connect to mongodb and start server
mongoose.connect('mongodb+srv://thatoneguy:12345xyz@dgm-cluster-fu5qw.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
        app.listen(port)    //Start server on specified port
    })
    .catch(err => {
        console.log(err)
    })
