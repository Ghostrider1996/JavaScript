function newHome(input) {

    const flowerType = input[0];
    const flowerQty = Number(input[1]);
    const budget = Number(input[2]);
    let discount = 1;
    let flowerCost = 0;

    const rosePrice = 5.00;
    const dahliaPrice = 3.80;
    const tulipPrice = 2.80;
    const narcissPrice = 3.00;
    const gladiolusPrice = 2.50;

    if (flowerType == "Roses") {
        flowerCost = rosePrice * flowerQty
        if (flowerQty > 80) {
            discount = 0.90;
        }
    } else if (flowerType == "Dahlias") {
        flowerCost = dahliaPrice * flowerQty
        if (flowerQty > 90) {
        discount = 0.85;
        }
    } else if (flowerType == "Tulips") {
        flowerCost = tulipPrice * flowerQty
        if (flowerQty > 80) {
        discount = 0.85;
        }
    } else if (flowerType == "Narcissus") {
        flowerCost = narcissPrice * flowerQty
        if (flowerQty < 120) {
        discount = 1.15;
        }
    } else if (flowerType == "Gladiolus") {
        flowerCost = gladiolusPrice * flowerQty
        if (flowerQty < 80) {
        discount = 1.20;
        }
    }

    let finalCost = flowerCost * discount;

    if (budget >= finalCost) {
        console.log(`Hey, you have a great garden with ${flowerQty} ${flowerType} and ${(budget - finalCost).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalCost - budget).toFixed(2)} leva more.`);
    }
}
newHome(["Roses","55","250"])
newHome(["Tulips","88","260"])
