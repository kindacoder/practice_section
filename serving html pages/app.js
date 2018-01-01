var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
  console.log('request was made to '+req.url);
  res.writeHead(200,{'Content-type':'text/html'});
  var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');
  myReadStream.pipe(res);
})
server.listen('3000','127.0.0.1',function(){
  console.log('server started !');
})