var peopleProto=function(){

}
peopleProto.prototype.age=0;
peopleProto.prototype.name='no name';
peopleProto.prototype.city='no city';
peopleProto.prototype.printPerson=function(){
  console.log(this.name+', '+this.age+', '+this.city);

}
var person1=new peopleProto();
// person1.name="Ashutosh";
person1.age=20;
person1.city="Allahabad";
// person1.printPerson();
console.log('' in person1);
