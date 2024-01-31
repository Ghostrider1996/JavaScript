function lab6(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  let diff = evenSum - oddSum;
  console.log(diff);
}
lab6([1, 2, 3, 4, 5, 6]);
lab6([3,5,7,9]);
lab6([1, 2, 3, 4, 5, 6]);
