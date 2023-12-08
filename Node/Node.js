const fs = require("fs");

fs.writeFile('./Misc/Node/msg.txt','Hello World', (err)=>{
    if (err) throw err;
    console.log('File has been saved!');
});
 

fs.readFile('./Misc/Node/msg.txt',"utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
});