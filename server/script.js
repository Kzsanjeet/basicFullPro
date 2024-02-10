const express = require('express');
const app = express();
const router = require("./route")
const connectDb = require("./dbConnection")

require( "dotenv").config()  // To access the environment variable


port = 4000;

connectDb()

// if(connectDb()){
//     console.log("It is connected")
// }else{   
//     console.log("Not connected")
// }
app.use(express.json())
app.use('/register',router)

app.post('/',(req,res)=>{
    res.status(200).json({
        message:"registered"
    })
})

app.get("/",(req,res)=>{
    res.send("Hello World!");
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
