const express =require('express')
const mongoose=require('mongoose') 
var bodyParser = require('body-parser');

const app=express()

mongoose.connect("mongodb://localhost/todo_express",{
    // useNewUrlParser:true,
    // useUnfiedTopology:true,
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.urlencoded({extended:true})) 
app.use(express.static("public"))
app.set("view engine","ejs")


app.use(require("./routes/index"))
app.use(require("./routes/todo"))

app.listen(30002,()=>console.log('server start listening'))





