const express = require("express");
const app = express();

const port = 4000;
const path = require("path");

app.get("/",(req,res)=>{
//res.sendFile("./index.html");

console.log(path.join(__dirname + "/index.html"));
res.sendFile(path.join(__dirname + "/index.html"))
});

app.post("/api/v1/login", (req,res)=>{
    res.send("<h1>Done</h1>");
    console.log("name");
    
    });
    


app.listen(port, ()=>{
    console.log(`Server is running on port:${port}`);
})