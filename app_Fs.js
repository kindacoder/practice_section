///for file system-
var fs=require('fs');
//read synchronously-

/*
var readMe=fs.readFileSync('sometext.txt','utf8')
console.log(readMe);
*/



////writing a file-
///let write the same thing we have written from sometext.txt file-

/*
fs.writeFileSync('newFile.txt',readMe+'Some text from sometext.txt file and some passed');
fs.writeFileSync('newFile.txt','write something in this file');
fs.writeFileSync('newFile.txt',readMe);
*/

/// Asynchronous file operation
///we use readFile and writeFile to do Asynchronous file operation
///because this is an Asynchronous operation so we need to provide a callback function-
/*
fs.readFile('sometext.txt','utf8',function(err,data){
console.log(data);
console.log(err);
if(err) throw err;
*/


  /*
fs.writeFile('writeWithAsynch.txt',data,function(error){
    if (error) throw error;
  })
})
console.log('I will print before the File write operation Because that operation was Asynchronous');
*/

///to delete the file we will use fs.unlink('filename.txt');
fs.unlink('sometext.txt');
