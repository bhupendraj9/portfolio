require('dotenv').config();
const mongoose= require('mongoose');

const dbConnection =()=>{
   mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("Database connection Succesful")}).catch((e)=>{console.log("Error in database connection " + e.message)})
}

module.exports = dbConnection;