function lab11(num) {
  let sum = 0;
  let counter = 0;

  while (counter < num) {
    for (let n = 1; counter < num; n++) {
      if (n % 2 !== 0) {
        console.log(n);
        sum += n;
        counter++;
      }
    }
  }

  console.log(`Sum: ${sum}`);
}
lab11(5);
lab11(3);
