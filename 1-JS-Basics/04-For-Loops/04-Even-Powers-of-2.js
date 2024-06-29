function evenPows(input) {
    let number = Number(input[0]);
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            let result = Math.pow(2, i)
            console.log(result);
        }
    }
}
evenPows((["3"]))
evenPows((["4"]))
evenPows((["5"]))
evenPows((["6"]))
evenPows((["7"]))