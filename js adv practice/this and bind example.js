function talk(){
  console.log(this.sound);
}
let newTalk={
  sound:'Hello I am Sound !'
}
let boundTalk=talk.bind(newTalk);
boundTalk();
// talk();  //undefined-
