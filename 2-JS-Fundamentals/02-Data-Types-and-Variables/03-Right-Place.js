function lab3(text1, char, text2) {
  let result = text1.replace("_", char);
  let output = result === text2 ? "Matched" : "Not Matched";

  console.log(output);
}
lab3("Str_ng", "I", "Strong");
lab3("Str_ng", "i", "String");
