var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
  console.log('Request made to URL: '+req.url);
  ///check the url at which request came--
  if(req.url=='/contact'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/contact.html').pipe(res);
  }else if(req.url=='/' || req.url=='/home'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
  }else if(req.url=='/api'){
    res.writeHead(200,{'Content-Type':'application/json'});
    var people=[{'name':'Hello','class':'9th'},{'name':'Jay','class':'10th'}];
    res.end(JSON.stringify(people));


  }else{
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(res);

  }
})
  server.listen('3000','127.0.0.1',function(){
    console.log('server started at 3000')
  })
