function person(saying){
  this.saying=saying
}
person.prototype.talk=function(){
  console.log('I said : '+this.saying);
}
var newPerson=new person('HelloBro How Are you !');
newPerson.talk();
