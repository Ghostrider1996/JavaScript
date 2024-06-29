function numbersSum(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationsCounter = 0;
    let validCombinationCounter = 0;
    let first = false

    for (let firstNum = start; firstNum <= end; firstNum++) {
        for (let secondNum = start; secondNum <= end; secondNum++) {

            combinationsCounter++;

            if (firstNum + secondNum === magicNumber) { 

                validCombinationCounter++
                console.log(`Combination N:${combinationsCounter} (${firstNum} + ${secondNum} = ${magicNumber})`);
                first = true
                break;
            }
        }

        if (first) {
            break;
        }
    }

    if (validCombinationCounter === 0) {
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);
    }
}
numbersSum((["1","10","5"]))
numbersSum(["88","888","1000"])
numbersSum(["23","24","20"])
numbersSum(["88","888","2000"])
