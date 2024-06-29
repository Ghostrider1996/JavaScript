function basketballEquipment(input){
    let annualTrainingFee = Number(input[0]);

    const sneakersPrice = annualTrainingFee * 0.6
    const basketballKitPrice = sneakersPrice * 0.8
    const basketBallPrice = basketballKitPrice / 4
    const basketballAccessoriesPrice = basketBallPrice / 5

    let finalCost = annualTrainingFee + //
    sneakersPrice + basketballKitPrice + //
    basketBallPrice + basketballAccessoriesPrice

    console.log(finalCost);
}
basketballEquipment(["365"])
basketballEquipment(["550"])


