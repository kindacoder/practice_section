var http=require('http');
var server=http.createServer(function(req,res){
  console.log('Request is made to URL :'+req.url);
  res.writeHead(200,{'Content-type':'application/json'});
  var myObj={
    name:'ryu',
    college:'GCET',
    age:'30'
  }
  res.end(JSON.stringify(myObj));
})
server.listen('3000','127.0.0.1',function(){
  console.log('Server started at port 3000');
})
