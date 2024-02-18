function charactersInRange(char1, char2) {
  let start = char1.charCodeAt(0);
  let end = char2.charCodeAt(0);

  let result = "";
  for (let i = Math.min(start, end) + 1; i < Math.max(start, end); i++) {
    result += String.fromCharCode(i) + " ";
  }

  console.log(result);
}
charactersInRange("a", "d");
charactersInRange("#", ":");
charactersInRange("C", "#");
