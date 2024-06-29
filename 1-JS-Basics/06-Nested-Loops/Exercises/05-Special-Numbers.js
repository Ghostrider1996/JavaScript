function exercise5(input) {
  let num = Number(input[0]);
  let isSpecial = true;
  let specialNums = [];

  for (let index = 1111; index <= 9999; index++) {
    let numArr = index.toString();
    let arrLength = numArr.length;

    for (let i = 0; i < arrLength; i++) {
      let digit = Number(numArr[i]);
      if (digit === 0 || num % digit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      specialNums.push(Number(numArr));
    }

    isSpecial = true;
  }

  console.log(specialNums.join(" "));
}
exercise5(["3"]);
// exercise5(["11"]);
// exercise5(["16"]);
