const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const groceriesIndex=require('./routes/groceriesIndex')
require('dotenv').config()


const mongoUrl=process.env.url
mongoose.connect(mongoUrl,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  })

const conection = mongoose.connection

conection.once('open',()=>{
    console.log("dfgsdg")
})



//accessing database testdb and then sending  collection loginIds
const get_db=()=>{       
        const db=client.db('test')
        return new Promise(function(resolve, reject){
            resolve(db);
        });
    }
const app = express()

app.use(cors())
app.use(express.json())
app.use('/',groceriesIndex)
var port =  process.env.PORT ||8080;
app.listen(port,()=>{console.log('listening at ',port)})