function lab3(n, numbers) {
  let reversedArray = [];
  n--;

  for (let i = n; i >= 0; i--) {
    reversedArray.push(numbers[i]);
  }

  let result = reversedArray.join(" ");

  console.log(result);
}
lab3(3, [10, 20, 30, 40, 50]);
