const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001
app.use(bodyParser.json())

require("./models/User")
const authRouts = require("./routes/authRout")
app.use(authRouts)

mongoose.connect("mongodb+srv://saqib:PwI9t2Ccqc01kOXc@tailorsmarketplace.budc9.mongodb.net/Tailors?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo successfully")
})

mongoose.connection.on("error",(err)=>{
    console.log("this is error", err)
})


app.get("/",(req,res)=>{
    console.log(req.body)
    res.send("hello")
})

app.listen(port,()=>{
    console.log("server running on port:"+port )
    var temp=[
        {
            id:0,
            value:23,
        },
        {
            id:1,
            value:23,
        },
        {
            id:2,
            value:23,
        },
        {
            id:3,
            value:23,
        },
    ]
    for (var i=0;i<temp.length;i++){
        if (temp[i].id==2){
            // delete temp[i];
            temp.splice(i, 1); 
            // console.log(temp[i])
        }
        
    }
    console.log('lojikjkl',temp)

})
