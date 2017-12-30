var peopleFactory=function(name,age,state){
  var temp={};
  // var temp=new Object;
  temp.age=age;
  temp.name=name;
  temp.state=state;
  temp.printPerson=function(){
    console.log(this.name+','+this.age+','+this.state)
  }
  return temp;
};
var newPeopleFactory=peopleFactory('ashutosh',15,'UP')
var people2=peopleFactory('Herry',14,'Ald');
people2.printPerson();
