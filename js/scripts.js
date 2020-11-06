
function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
}
/*Pizza.prototype.cost = function (){
  var cost = {
    cheese: 1.00,
    bacon: 1.00,
    sausage: 1.00
  }
}*/
Pizza.prototype.cost = function (){
  var cost = 0;
  if (this.size === "medium") {
    cost + 9;
  }
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
    var userSselect = (document.getElementsByName("pizzaSize"));
    //alert(this.size);
    var checkedBoxes2 = [];
    for (var i=0; i<userSselect.length; i++) {
      if (userSselect[i].checked) {
        checkedBoxes2.push(userSselect[i].value);
      }
    }  
    JSON.stringify(checkedBoxes2);
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
    cost(size);
    //Reciept();
    console.log(cost);
    $(".jumbotron-reciept").show();
    //const name = $("input#name").val();
    //const size = $("input[name='pizzaSize']:checked").val();
    //const selectedToppings = $("input[name='pizzaSize']:checked").val();
  });
});