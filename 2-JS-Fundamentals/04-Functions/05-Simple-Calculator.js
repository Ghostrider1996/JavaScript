function lab5(num1, num2, operator) {
  let multiply = (num1, num2) => num1 * num2;
  let devide = (num1, num2) => num1 / num2;
  let add = (num1, num2) => num1 + num2;
  let subtract = (num1, num2) => num1 - num2;

  let result = 0;

  switch (operator) {
    case "multiply":
      result = multiply(num1, num2);
      break;

    case "divide":
      result = devide(num1, num2);
      break;

    case "add":
      result = add(num1, num2);
      break;

    case "subtract":
      result = subtract(num1, num2);
      break;
  }
  return result;
}
console.log(lab5(5, 5, "multiply"));
console.log(lab5(40, 8, "divide"));
console.log(lab5(12, 19, "add"));
console.log(lab5(50, 13, "subtract"));
