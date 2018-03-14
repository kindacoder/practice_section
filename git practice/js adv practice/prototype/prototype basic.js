function talk(){
  console.log(this)
  console.log(this.sound);
}
let animal={
  talk
  //or talk:talk
  //talk=talk:talk
  //we can use simple talk because the variable
  // we are assigning and the assigning variable is same.

}
//now this is equal to animal object
animal.talk();  //here animal will work like this.
