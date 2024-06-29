function yardGreening(input){
    const squareMeterPrice = 7.61 
    let squareMeters = Number(input[0]);

    let totalCost = squareMeters * squareMeterPrice
    let discount = totalCost * (18 / 100)
    let finalCost = totalCost - discount

    console.log(`The final price is: ${finalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"])
yardGreening(["150"])



