function lab4(product, quantity) {
  let totalPrice = 0;
  let priceSingleItem = 0;

  switch (product) {
    case "coffee":
      priceSingleItem = 1.5;
      totalPrice = quantity * priceSingleItem;
      break;

    case "water":
      priceSingleItem = 1.0;
      totalPrice = quantity * priceSingleItem;
      break;

    case "coke":
      priceSingleItem = 1.4;
      totalPrice = quantity * priceSingleItem;
      break;

    case "snacks":
      priceSingleItem = 2.0;
      totalPrice = quantity * priceSingleItem;
      break;
  }
  return totalPrice.toFixed(2);
}
console.log(lab4("water", 5));
console.log(lab4("coffee", 2));
