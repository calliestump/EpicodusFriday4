function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
}

//User
//cost calc.
var makePizza = function() {
  var size = $("input[name='pizzaSize']:checked").val();
  var toppings = $("input[name='toppingOption']:checked").map(function() {
    return $(this).val();
  });
  var madePizza = new Pizza(size, toppings);
  console.log(toppings);
  alert(size);
  console.log(madePizza);
  return madePizza;
};


$(document).ready(function() {
  $("form#parlor").submit(function(event) {
    event.preventDefault();
    makePizza();
    $(".reciept").show();
    const name = $("input#name").val();

    //const size = $("input[name='pizzaSize']:checked").val();
    //const selectedToppings = $("input[name='pizzaSize']:checked").val();
  });
});