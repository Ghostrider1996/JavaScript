function exercise9(num) {
  let result = "";
  let symbol = "%";
  let dot = ".";

  if (num / 10 !== 10) {
    let symbolCount = num / 10;
    let dotCount = 10 - symbolCount;
    result = `${num}% [${symbol.repeat(symbolCount)}${dot.repeat(
      dotCount
    )}]\nStill loading...`;
  } else {
    result = `100% Complete!\n[%%%%%%%%%%]`;
  }
  return result;
}
console.log(exercise9(30));
console.log(exercise9(50));
console.log(exercise9(100));
