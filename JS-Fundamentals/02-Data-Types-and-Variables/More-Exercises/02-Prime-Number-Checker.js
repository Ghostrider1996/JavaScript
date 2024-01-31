function moreExerxise2(num) {
  let isPrime = undefined;
  let counter = 0;

  for (let division = num; division >= 0; division--) {
    if (num % division === 0) {
      counter++;
    }

    if (counter > 2) {
      isPrime = false;
    } else {
      isPrime = true;
    }
  }
  console.log(isPrime);
}
moreExerxise2(7);
moreExerxise2(8);
moreExerxise2(81);
