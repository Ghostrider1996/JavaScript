function numbersSum(input) {

    let number = (input[0])
    sum = 0

    for (i = 0; i < number.length; i++) {
        let num = Number(number[i])
        sum += num
    }
    
    console.log(`The sum of the digits is:${sum}`);
}
numbersSum(["1234"])
numbersSum(["564891"])