const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()


const mongoUrl=process.env.url
mongoose.connect(mongoUrl,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  })

const conection = mongoose.connection

conection.once('open',()=>{
    console.log("dfgsdg")
})

const app = express()

app.use(function (req,res,next){
    console.log('handling request : ',req.url+" with method "+req.method);
    next();
  })
  
app.use(cors())
app.use(express.json())
app.use('/',require('./routes/groceriesIndex'))
var port =  process.env.PORT ||8080;
app.listen(port,()=>{console.log('listening at ',port)})