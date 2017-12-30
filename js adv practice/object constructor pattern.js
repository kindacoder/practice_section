var fruit=function(name,taste){
  this.name=name;
  this.taste=taste;
  this.printFruit=function(){
    console.log('fruit is'+this.name+'taste is'+this.taste);
  }

}
var fruit1=new fruit('mango','Sweet');
fruit1.printFruit()
