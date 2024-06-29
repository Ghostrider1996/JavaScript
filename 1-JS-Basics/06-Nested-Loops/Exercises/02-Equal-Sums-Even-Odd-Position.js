function exercise2(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);
  let numArr = [];

  for (let index = firstNum; index <= secondNum; index++) {
    let currentNum = index.toString();
    let currentNumLength = currentNum.length;
    let evenSum = 0;
    let oddSum = 0;

    for (let digitIndex = 0; digitIndex < currentNumLength; digitIndex++) {
      let digit = Number(currentNum[digitIndex]);

      if ((digitIndex + 1) % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }

    if (evenSum === oddSum) {
      numArr.push(currentNum);
    }
  }
  console.log(numArr.join(" "));
}
// exercise2(["100000", "100050"]);
exercise2(["123456", "124000"]);
