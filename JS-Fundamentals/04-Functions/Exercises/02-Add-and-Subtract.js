function exercise2(num1, num2, num3) {
  let result = 0;

  function sum(num1, num2) {
    return num1 + num2;
  }

  function substract(result, num3) {
    return result - num3;
  }

  result = sum(num1, num2);
  result = substract(result, num3);
  return result;
}
console.log(exercise2(23, 6, 10));
console.log(exercise2(1, 17, 30));
console.log(exercise2(42, 58, 100));
