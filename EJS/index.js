import express from "express";
const app = express();
const port = 3000;

let date = new Date().getDay();
let day = "";
let requirement = "";

if(date != 6 && date != 1){
    day = "a weekday";
    requirement = "work hard";
}
else{
    day = "the weekend";
    requirement = "have fun";
}

let obj = {
    week: day,
    activity: requirement,
};

app.get("/",(req,res)=>{
    res.render('index.ejs',obj);
});

app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});