function petShop(input){

    const dogFoodPrice = 2.50
    const catFoodPrice = 4.00
    let dogFoodPackets = Number(input[0]);
    let catFoodPackets = Number(input[1]);

    let totalCost = dogFoodPackets * dogFoodPrice + //
    catFoodPackets * catFoodPrice

    console.log(`${totalCost} lv.`);
}
petShop(["5","4"])
petShop(["13","9"])