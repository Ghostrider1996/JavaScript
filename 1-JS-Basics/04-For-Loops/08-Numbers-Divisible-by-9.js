function divisibleBy9(input) {

    let startValue = Number(input[0]);
    let endValue = Number(input[1]);

    sum = 0

    for (i = startValue; i < endValue; i++) {
        if (i % 9 === 0) {
            sum += i
        }
    }

    console.log(`The sum: ${sum}`);

    for (i = startValue; i < endValue; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}
divisibleBy9(["100", "200"])