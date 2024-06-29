function lab8(numbers) {
  while (numbers.length > 1) {
    let condensed = [];

    for (let i = 0; i < numbers.length - 1; i++) {
      condensed[i] = numbers[i] + numbers[i + 1];
    }

    numbers = condensed;
  }

  console.log(numbers.join(""));
}
lab8([2, 10, 3]);
lab8([5, 0, 4, 1, 2]);
lab8([1]);
