const express = require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/bmical.html");
} )

app.post("/", function (req,res) {

  var wt=parseFloat(req.body.Weight);
  var ht=parseFloat(req.body.Height);

  var result=wt/(ht*ht);

  res.send("Your BMI is  "  + result);

})

app.listen(3000,function(){
  console.log("Serveris Working")
})
