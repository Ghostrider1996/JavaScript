function toyShop(input){

    const puzzlePrice = 2.60
    const speakingToyPrice = 3.00
    const teddyBearPrice = 4.10
    const minionPrice = 8.20
    const truckPrice = 2.00
    const rent = 0.9
    let discount = 0;

    let tripPrice = Number(input[0]);
    let pizzles = Number(input[1]);
    let speakingToys = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let truckToys = Number(input[5]);

    let totalToyCount = pizzles + speakingToys + //
    teddyBears + minions + truckToys
    let totalOrderCost = pizzles * puzzlePrice + //
    speakingToys * speakingToyPrice + //
    teddyBears * teddyBearPrice + //
    minions * minionPrice + //
    truckToys * truckPrice

    if (totalToyCount >= 50){
        discount = totalOrderCost * 0.25
    } else {
        discount = discount
    }

    let finalRevenueAfterAll = (totalOrderCost - discount) * rent

    if (tripPrice <= finalRevenueAfterAll){
        console.log(`Yes! ${(finalRevenueAfterAll - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - finalRevenueAfterAll).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8","20","25","30","50","10"])
toyShop(["320","8","2","5","5","1"])
