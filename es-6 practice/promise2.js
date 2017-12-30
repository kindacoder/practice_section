let cleanRoom =function(){
  return new Promise(function(resolve,reject){
    console.log(resolve);
  })
}
let removeGarbage=function(){
  return new Promise(function(resolve,reject){
    resolve('Remove Garbage')
  })
}
let winIcecream=function(){
  return new Promise(function(resolve,reject){
    resolve('Won Icecream')
  })
}
cleanRoom().then(function(){
  return removeGarbage();
}).then(function(){
  return winIcecream();
}).then(function(){
  console.log('Finished !')
})
