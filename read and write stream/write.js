var http=require('http');
//reading and writing files in streams-

var fs=require('fs');
var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf8');
///createReadStream is inherited from eventEmitter in there an event called
//data exists.
var myWriteStream=fs.createWriteStream(__dirname+'/writeMe.txt');

myReadStream.on('data',function(chunk){
  console.log('New chunk recieved!');
  myWriteStream.write(chunk);
})



/*
var server =http.createServer(function(req,res){
  console.log('request was made to :'+req.url);
  res.writeHead(200,{'Content-type':'text/html'})
  res.end('Hello Ninjas !')
})
server.listen('3000','127.0.0.1',function(){
  console.log('server restarted')
})
*/
