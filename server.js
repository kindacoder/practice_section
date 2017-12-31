var http=require('http');
var server =http.createServer(function(req,res){
  console.log('request was made to :'+req.url);
  res.writeHead(200,{'Content-type':'text/html'})
  res.end('Hello Ninjas !')
})
server.listen('3000','127.0.0.1',function(){
  console.log('server restarted')
})
