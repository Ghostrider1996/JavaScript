function repaintingMaritials(input) {
    let plasticProtectionRequiredSquareM = Number(input[0]);
    let paintLitersRequired = Number(input[1]);
    let thinnerlitersRequired = Number(input[2]);
    let requiredTechnicalTime = Number(input[3]);

    let additionalPlasticProtection = 2
    let additionalPaintLiters = 1.1

    const plasticProtectionPrice = 1.50
    const paintPrice = 14.50
    const thinnerPrice = 5.00
    const plasticPrice = 0.40

    let totalMaterialsCost = (plasticProtectionRequiredSquareM + additionalPlasticProtection) * plasticProtectionPrice + //
        (paintLitersRequired * additionalPaintLiters) * paintPrice + //
        thinnerlitersRequired * thinnerPrice + //
        plasticPrice;
    
    const workersFee = totalMaterialsCost * 0.3 * requiredTechnicalTime

    let totalCost = totalMaterialsCost + workersFee

    console.log(totalCost);
}
repaintingMaritials(["10", "11", "4", "8"])
repaintingMaritials(["5", "10", "10", "1"])

