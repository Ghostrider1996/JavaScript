function exercise7(numArray) {
  let sequence = 1;
  let maxSequence = 0;
  let maxSequenceNum = 0;
  let arrayLength = numArray.length;

  for (let index = 0; index < arrayLength; index++) {
    if (index !== 0) {
      let currentNumber = Number(numArray[index]);
      let prevNumber = Number(numArray[index - 1]);

      if (currentNumber === prevNumber) {
        sequence++;

        if (sequence > maxSequence) {
          maxSequence = sequence;
          maxSequenceNum = currentNumber;
        }
      } else {
        sequence = 1;
      }
    }
  }
  console.log(String(maxSequenceNum + " ").repeat(maxSequence));
}
exercise7([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
exercise7([1, 1, 1, 2, 3, 1, 3, 3]);
exercise7([4, 4, 4, 4]);
exercise7([0, 1, 1, 5, 2, 2, 6, 3, 3]);
