function multiplicationTable() {

    for (let num = 1; num <= 10; num++) {
        for (let multiplicator = 1; multiplicator <= 10; multiplicator++) {
            let result = num * multiplicator;
            console.log(`${num} * ${multiplicator} = ${result}`);
        }
    }
}
multiplicationTable()