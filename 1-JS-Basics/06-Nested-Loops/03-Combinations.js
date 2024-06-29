function combinations(input) {

    let n = Number(input[0]);
    let combinationsCounter = 0;

    for (let x1 = 0; x1 <= 25; x1++) {
        for (let x2 = 0; x2 <= 25; x2++) {
            for (let x3 = 0; x3 <= 25; x3++) {
                if (x1 + x2 + x3 == n) {
                    combinationsCounter += 1
                    
                }
            }
        }
    }
    console.log(combinationsCounter);
}
combinations(["25"])
combinations(["20"])
combinations(["5"])
