var express=require('express');
var app=express();
app.get('/',function(req,res){
  res.send('Hello you are on Home page!')
})
app.get('/contact',function(req,res){
  res.send('Hello you are on the contact page !')
})
app.get('/profile/:name',function(req,res){
  res.send('you are viewing the profile with name of : '+req.params.name)
})

app.listen(3000);
