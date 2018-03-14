const express=require('express');
var bodyParser=require('body-parser');
var path=require('path');

var app=express();

/*
var logger=function(req,res,next){
  console.log('logging... !')
  next();
}
app.use(logger);
*/

//View engine-

app.set('view engine','ejs');
///to get views- views path-
app.set('views',path.join(__dirname,'views'))

///Body parser Middleware-
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


///Middleware for our Public folder- setting static path-
app.use(express.static(path.join(__dirname,'public')));
/*
var people=[
  {
  name:'jeff',
  age:30
  },
  {
  name:'Ashu',
  age:20
  },
  {
  name:'Jai',
  age:35
  },
]
*/

var users=[
  {
    id:1,
    first_name:"Ashutosh",
    last_name:"Dwivedi",
    email:"Ashutosh@gmail.com"
  },
  {
    id:2,
    first_name:"Ashutosh2",
    last_name:"Dwivedi2",
    email:"Ashutosh2@gmail.com"
  },
  {
    id:3,
    first_name:"Ashutosh3",
    last_name:"Dwivedi3",
    email:"Ashutosh3@gmail.com"
  }
]

app.get('/',function(req,res){
// res.send('Hello World Again!')
// res.json(people)
res.render('index',{
  title:'Customers',
  users:users
});
})

//form post catch
app.post('/users/add',function(req,res){
  console.log(req.body.first_name)
})
app.listen(3000,function(){
  console.log('server Started on port 3000');
})
