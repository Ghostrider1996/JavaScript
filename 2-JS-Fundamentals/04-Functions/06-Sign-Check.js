function lab6(num1, num2, num3) {
  let negativeCouter = 0;
  let numArray = [num1, num2, num3];

  for (const number of numArray) {
    if (number < 0) {
      negativeCouter++;
    }
  }
  if (negativeCouter % 2 !== 0) {
    return "Negative";
  } else {
    return "Positive";
  }
}
console.log(lab6(5, 12, -15));
console.log(lab6(-6, -12, 14));
console.log(lab6(-1, -2, -3));
console.log(lab6(-5, 1, 1));
