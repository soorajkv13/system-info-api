// db.js
// connect mongoose 
const mongoose = require("mongoose");
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');
    }catch (error) {
        console.error(error);
    }
}
module.exports = { connectToDB };
