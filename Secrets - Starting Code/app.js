const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.render("./home.ejs")
});

app.get("/login",(req,res)=>{
    res.render("./login.ejs")
});

app.get("/register",(req,res)=>{
    res.render("./register.ejs")
});

app.get("/secrets",(req,res)=>{
    res.render("./secrets.ejs")
});

app.get("/submit",(req,res)=>{
    res.render("./submit.ejs")
});

app.listen(3000, ()=>{
    console.log(`Server is listening at Port 3000.`)
});