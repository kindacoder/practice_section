window.onload=function() {
  // $.get('data/person.json',function(data){
  //   console.log(data);
  // })
  function errorHandler(jqXHR,textStatus,error){
      console.log(error);
    }

  $.ajax({
    type:"GET",
    url:"data/person.json",
    success:callToppings,
    error:errorHandler
  })


  function callToppings(data){
    console.log(data);
  }

  
    $.ajax({
      type:"GET",
      url:"data/toppings.json",
      success:callMenuitems,
      error:errorHandler
    })


    function callMenuitems(data){
      console.log(data);
    }


      $.ajax({
        type:"GET",
        url:"data/menuitem.json",
        success:function(data){
          console.log(data);
        },
        error:errorHandler
      })


}
