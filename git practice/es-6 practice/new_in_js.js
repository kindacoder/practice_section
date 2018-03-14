class user{
  constructor(username,email,password){
    this.username=username;
    this.emailid=email;
    this.pass=password;

  }
  register(){
    console.log(this.username+"is now registered !");

  }
  static countUser(){
    console.log("There are 50 user !");
  }
}

// let ashutosh=new user('ashudubey636','ashu@gmail.com','hello123');
// console.log(ashutosh.username);
// console.log(ashutosh.emailid);
// console.log(ashutosh.pass);
// ashutosh.register();
//
// user.countUser()
// //extends

class member extends user{
  constructor(username,email,password,memberPackage){
    super(username,email,password);
    this.memberPackage=memberPackage;
  }
  getPackage(){
    console.log(this.username+"is subscribed to "+this.memberPackage+"package");
  }

}
var member1=new member("Ashufake","ashufake@gmail.com","ashufake@123","newPackage");
member1.getPackage();

console.log(member1.memberPackage);
member1.register();
console.log(member1);
