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
/*Pizza.prototype.cost = function (){
  var cost = 0;
  if (this.size === "medium") {
    cost + 9;
  }
  this.cost = cost;
}*/
//User
//cost calc.

Pizza.prototype.makePizza = function() {
  this.toppings = document.getElementsByName("toppingOption");
  //this.toppings = userToppings;
  var checkedBoxes1 = [];
  for (var i=0; i<this.toppings.length; i++) {
    if (this.toppings[i].checked) {
      checkedBoxes1.push(this.toppings[i].value);
    }
  }
  //var userSize = document.getElementsByName("pizzaSize");
  this.size = $("input[name='pizzaSize']:checked").val(); 
  var checkedBoxes2 = [];
  this.cost = 0;
  for (var i=0; i<this.size.length; i++) {
    if (this.size[i].checked) {
      checkedBoxes2.push(this.size[i].value);
    }
  }  
  if (this.size == "medium") {
    this.cost +1;
  }
 reciept
  $(".finalToppings").last().append(checkedBoxes1 + "");
  $(".finalSize").append(this.size);
  $(".name").append($(".userName").val());
  $(".number").append($(".userNumber").val());
  //console.log(madePizza);
  //return madePizza;
  if (userSize == "medium") {
    this.cost +1;
  }
}

$(document).ready(function() {
  $("form#parlor").submit(function(event) {
    $(".jumbotron-reciept").show();
    event.preventDefault();
    Pizza.prototype.makePizza();
    alert(this.cost);
    console.log(cost);
  });
});