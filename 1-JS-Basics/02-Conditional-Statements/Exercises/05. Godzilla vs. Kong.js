function godzillaVsKong(input){
    let castBudget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let estraKitPrice = Number(input[2]);
    let discount = 0;

    let background = castBudget * 0.1
    let estrasCost = extrasCount * estraKitPrice 

    if (extrasCount > 150){
        discount = estrasCost * 0.1
    } else {
        discount = discount
    }

    let finalCost = estrasCost - discount + background

    if (castBudget >= finalCost){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(castBudget - finalCost).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalCost - castBudget).toFixed(2)} leva more.`);
    }

}
godzillaVsKong(["20000","120","55.5"])
godzillaVsKong(["15437.62","186","57.99"])
godzillaVsKong(["9587.88","222","55.68"])
