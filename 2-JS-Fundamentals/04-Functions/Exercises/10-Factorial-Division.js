function exercise10(num1, num2) {
    let factorial1 = findFactorial(num1)
    let factorial2 = findFactorial(num2)
    let factorialDivision = factorial1 / factorial2

function findFactorial(num) {
    let result = 1

    while (num > 0) {
        result *= num;
        num--
    }
    return result
}
return factorialDivision.toFixed(2)

}
console.log(exercise10(5, 2));
console.log(exercise10(6, 2));