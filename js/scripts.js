function Pizza(size) {
  this.pizzaSize = size;
  this.toppings = 0;
  this.toppingsName = [];
}

Pizza.prototype.totalCost = function() {
  var cost = "$" + (this.pizzaSize + this.toppings) + ".00";
  return cost;
};

Pizza.prototype.addUserTopping = function(sum, id) {
  this.toppings += sum;
  this.toppingsName.push(id);
}

Pizza.prototype.toppingFinal = function () {
  return this.toppingsName.join(", ");
}

$(document).ready(function() {
  
  $("form#parlor").submit(function(event) {
    $(".reciept").show();
    event.preventDefault();

    var userSize = parseFloat($("#pizzaSize").val());
    var sizeReceipt = $("#pizzaSize option:selected").text();
    var userOrder = new Pizza(userSize);

    $("input[type=checkbox]:checked").each(function(name,checkbox) {
      userOrder.addUserTopping(parseFloat($(checkbox).val()), checkbox.name);
    });
    $("#name").append($(".userName1").val());
    $("#number").append($(".userNumber").val());
    $("#finalSize").append(sizeReceipt);
    $("#finalToppings").append(userOrder.toppingFinal());
    $("#finalTotal").append(userOrder.totalCost());

  });
});