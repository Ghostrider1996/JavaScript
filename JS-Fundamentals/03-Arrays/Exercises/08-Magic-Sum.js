function exercise8(numArray, magicNum) {
  let arrayLength = numArray.length;
  for (let i = 0; i < arrayLength; i++) {
    if (i !== 0) {
      let prevNum = numArray[i - 1];

      for (let j = i; j < arrayLength; j++) {
        let currentNum = Number(numArray[j]);
        let sum = currentNum + prevNum;

        if (sum === magicNum) {
          console.log(`${prevNum} ${currentNum}`);
        }
      }
    }
  }
}
// exercise8([1, 7, 6, 2, 19, 23], 8);
// exercise8([14, 20, 60, 13, 7, 19, 8], 27);
exercise8([1, 2, 3, 4, 5, 6], 6);
