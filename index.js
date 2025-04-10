const express = require('express');
require('dotenv').config();
const app = express();
const connectMongoDb = require('./config')
connectMongoDb()


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})