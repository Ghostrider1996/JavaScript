function exercise7(num) {
    for (let n = 1; n <= num; n++) {
      let result = String(n + " ");
      console.log(result.repeat(n));
    }
  }
  exercise7(3);
  exercise7(5);
  exercise7(6);
  