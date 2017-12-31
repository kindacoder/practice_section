var fs=require('fs');
//creating directories synchronously-
/*
fs.mkdirSync('stuff');  ///create directory
fs.rmdirSync('stuff');  ///delete directory
fs.writeFileSync('stuff/filename.txt','Hello written something there') //writing file under stuff directory

*/


///creating directory asynchronously
/*
fs.mkdir('stuffWithAsync',function(){
  fs.readFile('newFile.txt',function(err,data){
    fs.writeFile('stuffWithAsync/writeMe.txt',data)
  })
});
*/
///deleting directories--
// fs.rmdir('stuff');  // we will get an error that directory is not empty-
fs.unlink('stuff/filename.txt',function(){
  fs.rmdir('stuff')
})
