function smallestNumber(input) {

    let num = input[0];
    let index = 1;
    let smallestNumber = Number.MAX_SAFE_INTEGER;

    while (num !== "Stop") {
        numToNum = Number(num)
        if (numToNum < smallestNumber) {
           smallestNumber = numToNum
        }

        num = input[index]
        index++
    }

    console.log(smallestNumber);
}
smallestNumber(["100","99","80","70","Stop"])
