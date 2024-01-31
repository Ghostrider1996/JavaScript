function exercise1(num) {
  let numToString = num.toString();
  let sum = 0;

  for (let i = 0; i < numToString.length; i++) {
    let digit = Number(numToString[i]);
    sum += digit;
  }

  console.log(sum);
}
exercise1(245678);
exercise1(97561);
exercise1(543);
