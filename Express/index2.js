import bodyParser from "body-parser";
import express from "express"; 
import { dirname } from "path";                        //three lines needed to get direc name
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let str = "";

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/forms.html");        //send the html file keeping in mind the method
});

app.use(bodyParser.urlencoded({extended: true}));    //middlware to parse form info on post request


app.use((req,res,next) => {                 //custome middleare using arrow
    str = `Your E-mail - ${req.body.email}<br>Your Password - ${req.body.password}`;
    next();
});

app.post('/send',(req,res)=>{
    res.send(str);
});

app.listen(port,()=>{
    console.log(`Listening at Port ${port}`);
});