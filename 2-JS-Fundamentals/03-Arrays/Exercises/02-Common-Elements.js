function exercise2(array1, array2) {
  for (const element of array1) {
    if (array2.includes(element)) {
      console.log(element);
    }
  }
}
exercise2(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
exercise2(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
