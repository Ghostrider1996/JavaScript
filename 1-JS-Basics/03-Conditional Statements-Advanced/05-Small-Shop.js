function smallShop(input) {

    const product = input[0];
    const town = input[1];
    const qty = Number(input[2]);

    let coffeePrice = 0;
    let waterPrice = 0;
    let beerPrice = 0;
    let sweetsPrice = 0;
    let peanutsPrice = 0;
    let cost = 0;

    switch (town) {
        case "Sofia":
            coffeePrice = 0.50
            waterPrice = 0.80
            beerPrice = 1.20
            sweetsPrice = 1.45
            peanutsPrice = 1.60

            if (product == "coffee") {
                cost = coffeePrice * qty
            } else if (product == "water") {
                cost = waterPrice * qty
            } else if (product == "beer") {
                cost = beerPrice * qty
            } else if (product == "sweets") {
                cost = sweetsPrice * qty
            } else if (product == "peanuts") {
                cost = peanutsPrice * qty
            }
            break;

        case "Plovdiv":
            coffeePrice = 0.40
            waterPrice = 0.70
            beerPrice = 1.15
            sweetsPrice = 1.30
            peanutsPrice = 1.50

            if (product == "coffee") {
                cost = coffeePrice * qty
            } else if (product == "water") {
                cost = waterPrice * qty
            } else if (product == "beer") {
                cost = beerPrice * qty
            } else if (product == "sweets") {
                cost = sweetsPrice * qty
            } else if (product == "peanuts") {
                cost = peanutsPrice * qty
            }
            break;

        case "Varna":
            coffeePrice = 0.45
            waterPrice = 0.70
            beerPrice = 1.10
            sweetsPrice = 1.35
            peanutsPrice = 1.55

            if (product == "coffee") {
                cost = coffeePrice * qty
            } else if (product == "water") {
                cost = waterPrice * qty
            } else if (product == "beer") {
                cost = beerPrice * qty
            } else if (product == "sweets") {
                cost = sweetsPrice * qty
            } else if (product == "peanuts") {
                cost = peanutsPrice * qty
            }
            break;
    }
    console.log(cost);
}
smallShop(["coffee", "Varna", "2"])
smallShop(["peanuts", "Plovdiv", "1"])
smallShop(["beer", "Sofia", "6"])
smallShop(["water", "Plovdiv", "3"])
smallShop(["sweets", "Sofia", "2.23"])