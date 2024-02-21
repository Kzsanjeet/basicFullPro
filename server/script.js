const express = require('express');
const app = express();
const router = require("./route")
const connectDb = require("./dbConnection")
const cors = require("cors")

require( "dotenv").config()  // To access the environment variable


port = 4000;

connectDb()

app.use(express.json())
app.use(cors( {origin: true} ));   
app.use('/',router)



app.get("/",(req,res)=>{
    res.send("Hello World!");
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
