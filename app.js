var events=require('events');
var util=require('util');
var Person=function(name){
  this.name=name;
}
///inherit all the event properties in Person to use it
//for this we used util
util.inherits(Person,events.EventEmitter);
//make 3 persons-
var james=new Person('james');
var ashutosh=new Person('Ashutosh');
var roy=new Person('roy');
///Create an array and let these people enter into it-
var people=[james,ashutosh,roy];
people.forEach(function(person){
  ///addd some events to person or some listeners-
  person.on('speak',function(msg){
    console.log(person.name+' said : '+msg);
  })
})
james.emit('speak','hey Dudes !')
roy.emit('speak','we are cool !');
