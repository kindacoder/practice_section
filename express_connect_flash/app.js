const express=require('express');
var app=express();
var cookieParser=require('cookie-parser');
var flash=require('connect-flash');
var session=require('express-session');


//use meiddlewares;
// app.use(cookieParser());
app.use(session({secret:"shh, its a secret"}));
app.use(flash());

//set views-

app.set('view engine','ejs');

app.get('/flash',function(req,res){
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('info','hello Ashutosh ! Flash is back ?');
  res.redirect('/');

})
app.get('/',function(req,res){
  res.render('flash',{message:req.flash('info')});
})


app.listen(3000,function(){
  console.log('server started at port 3000');
})
