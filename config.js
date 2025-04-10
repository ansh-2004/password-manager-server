const mongoose = require('mongoose');

const DB_NAME = `${process.env.DB_NAME}` 
const connectMongoDb = async () =>{
    
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}

module.exports = connectMongoDb;