function moreExercise4(num1, num2, num3) {
  let numbers = [num1, num2, num3];
  let biggestNum = Number.MIN_SAFE_INTEGER;

  for (const number of numbers) {
    if (number > biggestNum) {
      biggestNum = number;
    }
  }
  console.log(biggestNum);
}
moreExercise4(-2, 7, 3);
moreExercise4(130, 5, 99);
moreExercise4(43, 43.2, 43.1);
moreExercise4(2, 2, 2);
