function rangeNumbers(input) {

    let num = Number(input[0]);

    if (num >= -100 && num <= 100 && num !== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
rangeNumbers(["-25"])
rangeNumbers(["0"])
rangeNumbers(["25"])