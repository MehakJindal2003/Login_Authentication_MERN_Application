const express= require('express')
const cors = require("cors");
const mongoose=require("mongoose");
const app= express()
const dB=require('./middlewares/dB');
const router=require('./routes/form-routes');

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use("/",router);

mongoose.connect("mongodb+srv://mehak0875be21:Mehak2003@cluster0.8gtts2o.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database"))
.then(()=>{
    app.listen(9002);
}).catch((err)=>console.log(err));