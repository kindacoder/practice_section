let dog={
  sound:'woof',
  talk:function(){
    console.log(this.sound);
  }
}
let button=document.getElementById('myButton').addEventListener('click',dog.talk.bind(dog));
