function lab5(stringNumbers) {
  let sum = 0;

  for (const num of stringNumbers) {
    let currNum = Number(num);

    if (currNum % 2 === 0) {
      sum += currNum;
    }
  }
  console.log(sum);
}
lab5(["1", "2", "3", "4", "5", "6"]);
lab5(["3", "5", "7", "9"]);
lab5(["2", "4", "6", "8", "10"]);
