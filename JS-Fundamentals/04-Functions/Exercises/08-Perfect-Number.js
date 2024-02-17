function exercise8(num) {
  let isPerfectNum = false;
  let result = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  if (num === result) {
    isPerfectNum = true;
  } else {
    isPerfectNum = false;
  }

  if (isPerfectNum) {
    return "We have a perfect number!";
  } else {
    return "It's not so perfect.";
  }
}
console.log(exercise8(6));
console.log(exercise8(28));
console.log(exercise8(1236498));
