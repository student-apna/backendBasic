
require('dotenv').config();
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello Word');
})

app.get('/twitter',(req,res)=>{
    res.send("hello I am Aftab Alam");
})

app.get('/login',(req,res)=>{
    res.send('<h1> Hello I am a H1 Tag </h1>')
})


const PORT =  process.env.PORT||7000;

app.listen(PORT,()=>{
    console.log(`app listening on port :${PORT}`);
})