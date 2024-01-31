function moreExercise2(num) {
  let numberName = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero",
  };

  let numberToString = String(num);
  let number = numberToString[numberToString.length - 1];

  if (number in numberName) {
    console.log(numberName[number]);
  }
}
moreExercise2(512);
