function exercise4(num) {
  let numToStr = num.toString();
  let [evenSum, oddSum] = findEvenAndOddSum(numToStr);
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

  function findEvenAndOddSum(numToStr) {
    let evenSum = 0;
    let oddSum = 0;

    for (const char of numToStr) {
      let digit = Number(char);

      if (digit % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }
    return [evenSum, oddSum];
  }
}
exercise4(1000435);
exercise4(3495892137259234)
