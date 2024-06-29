function largerNumber(input) {

    let num = input[0];
    let index = 1;
    let BiggestNumber = Number.MIN_SAFE_INTEGER;

    while (num !== "Stop") {
        numToNum = Number(num)
        if (numToNum > BiggestNumber) {
            BiggestNumber = numToNum
        }

        num = input[index]
        index++
    }

    console.log(BiggestNumber);
}
largerNumber(["100","99","80","70","Stop"])
