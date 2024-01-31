function exercise3(array1, array2) {
  let array3 = [];

  for (let i = 0; i < array1.length; i++) {
    let element = "";
    if (i % 2 === 0) {
      element = Number(array1[i]) + Number(array2[i]);
    } else {
      element = array1[i] + array2[i];
    }
    array3.push(element);
  }
  console.log(array3.join(" - "));
}
exercise3(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
exercise3(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
