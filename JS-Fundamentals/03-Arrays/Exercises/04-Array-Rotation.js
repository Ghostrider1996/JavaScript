function exercise4(array, rotations) {
  for (let i = 0; i < rotations; i++) {
    let firstElement = array.shift();
    array.push(firstElement);
  }
  let arrayAsString = array.join(" ");

  console.log(arrayAsString);
}
exercise4([51, 47, 32, 61, 21], 2);
