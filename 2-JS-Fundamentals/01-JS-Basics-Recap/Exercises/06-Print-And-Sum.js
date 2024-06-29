function exercise6(num1, num2) {
  let result = "";
  let sum = 0;
  for (let n = num1; n <= num2; n++) {
    sum += n;
    result += n + " ";
  }

  console.log(result);
  console.log(`Sum: ${sum}`);
}
exercise6(5, 10);
exercise6(0, 26);
exercise6(50, 60);
