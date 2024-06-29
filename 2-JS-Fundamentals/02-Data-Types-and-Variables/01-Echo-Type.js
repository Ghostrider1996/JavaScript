function lab1(randomParam) {
  console.log(typeof randomParam);
  if (typeof randomParam === "string" || typeof randomParam === "number") {
    console.log(randomParam);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}
lab1('Hello, JavaScript!')
lab1(18)
lab1(null)