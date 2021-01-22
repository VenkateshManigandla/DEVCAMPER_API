const mongoose = require('mongoose')

// db
const connectDB = async () =>{
const conn = await mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})
    .then(() => console.log('DB connected'))
}

module.exports = connectDB;