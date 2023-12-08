import express from 'express';
const app = express();
const port = 3000;

app.get("/",(req,res)=>{                  //when client sends get request at "/"(endpoint) by req
    res.send("<h1>Hello World</h1>")        //server responds by res -
});

app.get("/about",(req,res)=>{         //when diff endpoint is requested
    res.send("<h1>About Me</h1><p>My name is Haroon</p>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Me</h1><p>+971 56 744 3395</p>");
});

app.listen(port,()=>{                               //server is listening at the particular port
    console.log(`Server running on Port ${port}`)     
});