function lab10(n) {
  for (let i = 1; i <= n; i++) {
    let num = i;
    let sum = 0;
    let status = "";

    while (num > 0) {
      sum += num % 10;
      num = parseInt(num / 10);
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      status = "True";
    } else {
      status = "False";
    }

    console.log(`${i} -> ${status}`);
  }
}
lab10(15);
// lab10(20);
