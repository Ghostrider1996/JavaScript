function clevarLily(input) {

    let age = Number(input[0]);
    let washerMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    moneySaved = 0;
    birdDayMoney = 10;



    for (i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneySaved += birdDayMoney - 1
            birdDayMoney += 10
        } else
            moneySaved += singleToyPrice
    }

    let diff = Math.abs(moneySaved - washerMachinePrice)

    if (moneySaved >= washerMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else
        console.log(`No! ${diff.toFixed(2)}`);
}
clevarLily(["10","170.00","6"])
clevarLily(["21","1570.98","3"])


