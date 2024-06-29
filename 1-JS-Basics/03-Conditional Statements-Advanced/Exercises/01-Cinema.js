function cinema(input) {

    let projectionType = input[0];
    let colums = Number(input[1]);
    let rows = Number(input[2]);

    const premierePrice = 12.00
    const normalPrice = 7.50
    const discountPrice = 5.00
    let income = 0;

    if (projectionType == "Premiere") {
        income = colums * rows * premierePrice 
    } else if (projectionType == "Normal") {
        income = colums * rows * normalPrice
    } else if (projectionType == "Discount") {
        income = colums * rows * discountPrice
    }

    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere","10","12"])
cinema(["Normal","21","13"])
cinema(["Discount","12","30"])
