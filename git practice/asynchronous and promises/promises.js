window.onload=function() {
  $.get('data/menuitem.json',function(menuitem){
    console.log(menuitem);
    return $.get('data/person.json');
  }).then(function(persons){
    console.log(persons);
    return $.get('data/toppings.json');
  }).then(function(toppings){
    console.log(toppings);
  })

///do something here-
// function get(url){
//   return new Promise(function(resolve, reject) {
//     var xhttp=new XMLHttpRequest();
//     xhttp.open("GET",url,true);
//     xhttp.onload=function(){
//       if(xhttp.status==200){
//         resolve(JSON.parse(xhttp.response));
//       }else{
//         reject(xhttp.statusText)
//       }
//     }
//       xhttp.onerror=function(){
//         reject(xhttp.statusText)
//       };
//       xhttp.send();
//
//   });
// }
// var promise= get("data/toppings.json");
// promise.then(function(toppings){
//   console.log(toppings);
//   return get("data/person.json")
// }).then(function(persons){
//   console.log(persons);
//   return get("data/menuitem.json")
// }).then(function(menuitems){
//   console.log(menuitems)
// }).catch(function(error){
//   console.log(error);
// })

}
