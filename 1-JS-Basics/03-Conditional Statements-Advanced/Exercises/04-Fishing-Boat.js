function fishingBoat(input) {
    const groupBudget = Number(input[0]);
    const season = input[1];
    const fishmanQty = Number(input[2]);

    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            break;
        
        case "Autumn":
        case "Summer":
            price = 4200;
            break;

        case "Winter":
            price = 2600;
            break;
    }

    if (fishmanQty <= 6) {
        price *= 0.9;
    } else if (fishmanQty <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if (fishmanQty % 2 === 0 && season !== "Autumn"){
        price *= 0.95;
    }

    if (groupBudget >= price) {
        moneyLeft = groupBudget - price
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        moneyNeeded = price - groupBudget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000","Summer","11"])
fishingBoat(["3600","Autumn","6"])
fishingBoat(["2000","Winter","13"])


