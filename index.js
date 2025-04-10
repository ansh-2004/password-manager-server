const express = require('express');
require('dotenv').config();
const app = express();
const connectMongoDb = require('./config')
const credentialsRoutes = require('./routes/credentials');
connectMongoDb()
const cors = require('cors');
app.use(cors());
app.use(express.json());



app.use('/', credentialsRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})