function fruitShop(input) {

    let fruitType = input[0];
    let weekDay = input[1];
    let qty = Number(input[2]);

    let bananaPrice = 0;
    let applePrice = 0;
    let orangePrice = 0;
    let grapefruitPrice = 0;
    let kiwiPrice = 0;
    let pineapplePrice = 0;
    let grapesPrice = 0;
    let totalPrice = 0;

    switch (weekDay) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            bananaPrice = 2.50;
            applePrice = 1.20;
            orangePrice = 0.85;
            grapefruitPrice = 1.45;
            kiwiPrice = 2.70;
            pineapplePrice = 5.50;
            grapesPrice = 3.85;

            if (fruitType == "banana") {
                totalPrice = bananaPrice * qty
            } else if (fruitType == "apple") {
                totalPrice = applePrice * qty
            } else if (fruitType == "orange") {
                totalPrice = orangePrice * qty
            } else if (fruitType == "grapefruit") {
                totalPrice = grapefruitPrice * qty
            } else if (fruitType == "kiwi"){
                totalPrice = kiwiPrice * qty
            } else if (fruitType == "pineapple") {
                totalPrice = pineapplePrice * qty
            } else if (fruitType == "grapes") {
                totalPrice = grapesPrice * qty
            }
            break;

        case "Saturday":
        case "Sunday":
            bananaPrice = 2.70;
            applePrice = 1.25;
            orangePrice = 0.90;
            grapefruitPrice = 1.60;
            kiwiPrice = 3.00;
            pineapplePrice = 5.60;
            grapesPrice = 4.20;

            if (fruitType == "banana") {
                totalPrice = bananaPrice * qty
            } else if (fruitType == "apple") {
                totalPrice = applePrice * qty
            } else if (fruitType == "orange") {
                totalPrice = orangePrice * qty
            } else if (fruitType == "grapefruit") {
                totalPrice = grapefruitPrice * qty
            } else if (fruitType == "kiwi"){
                totalPrice = kiwiPrice * qty
            } else if (fruitType == "pineapple") {
                totalPrice = pineapplePrice * qty
            } else if (fruitType == "grapes") {
                totalPrice = grapesPrice * qty
            }
            break;

        default: {
            totalPrice = 0
        }
    }

    if (totalPrice !== 0) {
        console.log(totalPrice.toFixed(2));
    } else {
        console.log("error");
    }
}
fruitShop(["pineapple", "Wednesday", "1.6"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "Saturday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])