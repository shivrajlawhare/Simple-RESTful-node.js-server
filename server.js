const express = require("express");
const app = express();
const fs = require("fs");

let data = JSON.parse(fs.readFileSync('./names.json'));

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/",(req,res) => {
    res.status(200).json(data);
    console.log("success");
})

app.post("/api", (req,res) => {
    const newPerson = req.body;
    data.push(newPerson); 
    fs.writeFile('./names.json',JSON.stringify(data),(err) => {
        res.status(201).json(newPerson);
    });
    console.log("success");
})

app.put("/api", (req,res) => {
   var flag=0;
   for (var i=0 ; i < data.length ; i++)
    {
        if (data[i].name === req.body.name) {
           data[i].email = req.body.email;
           fs.writeFile('./names.json',JSON.stringify(data),(err) => {
                res.send("updated");
            });
           flag=1;
        }
    }
    if(flag==0){
        res.send("name not found");
    }
    console.log("success");
})

app.delete("/api", (req,res) => {
    var flag=0;
   for (var i=0 ; i < data.length ; i++)
    {
        if (data[i].name === req.body.name) {
           data.splice(i,1);
           fs.writeFile('./names.json',JSON.stringify(data),(err) => {
                res.send("deleted");
            });
           flag=1;
        }
    }
    if(flag==0){
        res.send("name not found");
    }
    console.log("success");
})

const start = async () => {
    try{
        app.listen(PORT , ()=> {
            console.log(`${PORT} Yess server is connected.`);
        })
    }catch(error){
        console.log(error);
    }
}

start();
