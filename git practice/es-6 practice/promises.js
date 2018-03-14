let promiseToCleanTheRoom= new Promise(function(resolve,reject){
  //cleaning the room-

  let isClean=false;
  if(isClean){
    //resolve it-
    resolve('clean');
  }
  else{
    reject('not clean');
  }
})
promiseToCleanTheRoom.then(function(fromResolve){
  console.log('Room is:'+fromResolve)
}).catch(function(fromReject){
  console.log('Room is:'+fromReject)
})
