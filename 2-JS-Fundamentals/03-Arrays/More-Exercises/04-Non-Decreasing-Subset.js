function moreExercise4(numArr) {
  let biggestNum = Number.MIN_SAFE_INTEGER;
  let increasingArr = [];
  let arrLength = numArr.length;

  for (let index = 0; index < arrLength; index++) {
    let currNum = numArr[index];
    if (currNum < biggestNum) {
      continue;
    } else {
      biggestNum = currNum;
      increasingArr.push(currNum);
    }
  }
  let result = increasingArr.join(" ");
  console.log(result);
}
moreExercise4([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// moreExercise4([ 1, 2, 3, 4])
// moreExercise4([ 20, 3, 2, 15, 6, 1])
