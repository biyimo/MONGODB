const express = require('express');
const mongoose = require('mongoose');



const app = express();
const port = 8020;


// Connecting to Database
mongoose.connect('mongodb+srv://preciousolayinka8:yinkaomisakin@cluster0.yjb1gkt.mongodb.net/')
const db = mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',(req,res)=>console.log('connected to database successfully'))


// Configuring Server to accept JSON
app.use(express.json())


app.get('/', (req,res)=>{
    res.send('welcome to homepage')
})

const productRouter = require('./routes/product')
app.use(productRouter)


app.listen(port, ()=>{
    console.log('server started successfully')
})