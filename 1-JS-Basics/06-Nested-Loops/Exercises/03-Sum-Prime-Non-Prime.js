function exercise3(nums) {
  let index = 0;
  let command = nums[index];
  let divisionCount = 0;

  let primeSum = 0;
  let nonPrimeSum = 0;

  while (command !== "stop") {
    let number = Number(command);

    if (number < 0) {
      console.log("Number is negative.");
    } else {
      for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
          divisionCount++;
        }
      }
    }

    if (divisionCount > 2) {
      nonPrimeSum += number;
    } else if (divisionCount !== 0) {
      primeSum += number;
    }

    index++;
    command = nums[index];
    divisionCount = 0;
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
exercise3(["3", "9", "0", "7", "19", "4", "stop"]);
// exercise3(["30", "83", "33", "-1", "20", "stop"]);
// exercise3(["0", "-9", "0", "stop"]);
