const express = require('express');
require('dotenv')
const app = express();

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send(`hello from port : ${PORT}`)
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})