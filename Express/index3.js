import express from "express";
const app = express();
const port = 3000;

// app.use((req,res,next)=>{
//     console.log(`Request Method - ${req.method}\nRequest URL - ${req.url}`);
//     next();
// });

function custom(req,res,next){   
        console.log(`Request Method - ${req.method}\nRequest URL - ${req.url}`);
        next();
};

app.use(custom);       //custom middleware

app.get("/",(req,res)=>{
    res.send('Hello');
});

app.listen(port,()=>{
    console.log(`Listening at Port ${port}`);
});

