var express=require('express');
var app=express();
var cookieParser=require('cookie-parser');
var session=require('express-session');

app.use(cookieParser());
app.use(session({secret:"shh, its a secret"}));


app.get('/',function(req,res){
  console.log(req.cookies);
  res.cookie('name','Ashutosh',{maxAge:5*1000});
  if(req.session.pageviews){
    req.session.pageviews++;
    res.send('you have visited this page '+req.session.pageviews+' times');
  }
  else{

    req.session.pageviews=1;
    res.send('you have visited the page first time');

  }
})


app.get('/cookie',function(req,res){
  console.log(req.cookies);
  res.end('hello cookie check !')
})


app.listen(3000,function(){
  console.log('server started at port 3000');
})
