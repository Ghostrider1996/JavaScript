function schoolSupplies(input){
    let penPackets = Number(input[0]);
    let markerPackets = Number(input[1]);
    let preparetionLiters = Number(input[2]);
    let discountRate = Number(input[3]);

    const penPackPrice = 5.8
    const marketPackPrice = 7.2
    const preparetionLiterPrice = 1.2

    let totalCost = (penPackets * penPackPrice) + //
    (markerPackets * marketPackPrice) + //
    (preparetionLiters * preparetionLiterPrice);
    
    let finalCost = totalCost - (totalCost * (discountRate / 100));

    console.log(finalCost);
}
schoolSupplies(["2", "3", "4", "25"])
schoolSupplies(["4", "2", "5", "13"])



