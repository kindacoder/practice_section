var fruit={
  name:"mango",
  tellMyName:function(){
    console.log(this.name);
  }
}
var newFun=fruit.tellMyName.bind(fruit);
newFun();
// var againNewFun=newFun.bind(fruit);
// againNewFun();
