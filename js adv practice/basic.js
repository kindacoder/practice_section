var fruit={
  name:'mango',
  tellMyName:function(){
    console.log(this.name);
  }
}
fruit.tellMyName();
let fruitName=fruit.tellMyName;
let boundFunction=fruitName.bind(fruit);
boundFunction();
