var http=require('http');
var fs=require('fs');
/*
var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe.txt')

myReadStream.pipe(myWriteStream);
*/


var server =http.createServer(function(req,res){
  console.log('request was made to :'+req.url);
  res.writeHead(200,{'Content-type':'text/html'})
  ///res object is a writable stream so we can write data into it that we read from readMe.txt file-
  var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf8');
  myReadStream.pipe(res);
  ///res object is a writable stream.
})
server.listen('3000','127.0.0.1',function(){
  console.log('server restarted')
})
