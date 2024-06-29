function lab1(numbers) {
  let firstNum = numbers.shift();
  let lastNum = numbers.pop();
  let sum = firstNum + lastNum;

  console.log(sum);
}
lab1([20, 30, 40]);
lab1([10, 17, 22, 33]);
lab1([11, 58, 69]);
