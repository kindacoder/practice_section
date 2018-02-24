var express=require('express');
var bodyParser=require('body-parser');

var app=express();
// app.use(express.static('public'))
app.get('/',function(req,res){
res.send(req.query.name)
})

app.listen(3000,function(){
  console.log('Server started at port 3000');
});
