
function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
}

//User
//cost calc.
var makePizza = function() {
  //puts toppings in array
  var userTselect = document.getElementsByName("toppingOption");
    var checkedBoxes = [];
    for (var i=0; i<userTselect.length; i++) {
      if (userTselect[i].checked) {
        checkedBoxes.push(userTselect[i].value);
      }
    }
    //puts sizes in array
    var userSselect = document.getElementsByName("pizzaSize");
    var checkedBoxes2 = [];
    for (var i=0; i<userSselect.length; i++) {
      if (userSselect[i].checked) {
        checkedBoxes2.push(userSselect[i].value);
      }
    }  
  var size = $("input[name='pizzaSize']:checked").val();
  var toppings = $("input[name='toppingOption']:checked").map(function() {
    return $(this).val();
  });
  var madePizza = new Pizza(size, toppings);
  $(".finalToppings").last().append(checkedBoxes + "");
  $(".finalSize").append(checkedBoxes2);
  $(".name").append($(".userName").val());
  $(".number").append($(".userNumber").val());
  console.log(madePizza);
  return madePizza;
};

$(document).ready(function() {
  $("form#parlor").submit(function(event) {
    event.preventDefault();
    makePizza();
    //Reciept();
    $(".jumbotron-reciept").show();
    //const name = $("input#name").val();
    //const size = $("input[name='pizzaSize']:checked").val();
    //const selectedToppings = $("input[name='pizzaSize']:checked").val();
  });
});