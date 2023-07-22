require('dotenv').config();
const express =require('express');
const app = express();
const cors = require('cors');
const routes= require('./routes/routes');

const dbConnection = require('./config/database');
app.use(express.json());
app.use(cors());
app.use(routes);


dbConnection();

app.listen(process.env.PORT,()=>{console.log("Server Started on port " + process.env.PORT)})


