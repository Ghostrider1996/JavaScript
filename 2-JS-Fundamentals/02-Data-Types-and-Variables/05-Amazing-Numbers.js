function lab5(num) {
  num = num.toString();
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  let result = sum.toString().includes("9");
  console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
lab5(1233);
lab5(999);
