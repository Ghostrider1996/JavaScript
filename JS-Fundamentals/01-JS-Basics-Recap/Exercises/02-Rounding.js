function exercise2(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let result = num.toFixed(precision);

  console.log(parseFloat(result));
}
exercise2(3.1415926535897932384626433832795, 2);
exercise2(10.5, 3);
