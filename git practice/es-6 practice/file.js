let add=function(a,b){
  return a+b;
}
let multi=function(a,b){
  return a*b;
}
let calc=function(a,b,callback){
  if(typeof callback=='function'){
    return callback(a,b);

}
}
let returnNumber=function(a,b){
  console.log(`here are your two numbers :${a},${b}`);
}
console.log(calc(8,9,function(a,b){
  return a+b;
}))
