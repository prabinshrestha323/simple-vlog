const express = require("express");
const mongoose= require("mongoose");
const bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
const bcrypt =require("bcrypt")
const app = express();

mongoose.connect('mongodb://localhost/login_register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
mongoose.connection.on("connected", connected => {
    console.log("connection to database....")
})
mongoose.connection.on("err", error => {
    console.log("err")
})
/*****public folder***********/
app.use(express.static("public"))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/more",(req,res)=>{
    res.render("vlog/more")
})

app.get("/blog",(req,res)=>{
    res.render("vlog/blog")
})
app.get("/writer",(req,res)=>{
    res.render("vlog/writer")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/register",(req,res)=>{
    res.render("register")
})




const registerrouter =require("./routes/register.router");
app.use("/",registerrouter)
const writer =require("./routes/writer");
app.use("/",writer)

app.listen(9000, () => {
    console.log(`localhost://${9000}`)
})



