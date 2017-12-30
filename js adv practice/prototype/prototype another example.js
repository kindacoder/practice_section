function talk(){
  // console.log(this);
  console.log(this.sound);
}
let animal={
  talk:talk
}
let cat={
  sound:'meow!'
}
let dog={
  sound:'Woof !'
}
let prarieDog={
  howl:function(){
    console.log(this.sound.toUpperCase())
  }
}
Object.setPrototypeOf(cat,animal);
cat.talk();
Object.setPrototypeOf(dog,animal);
dog.talk();
Object.setPrototypeOf(prarieDog,dog);

prarieDog.howl();
