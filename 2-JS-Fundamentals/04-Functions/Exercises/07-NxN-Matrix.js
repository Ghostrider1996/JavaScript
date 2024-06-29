function exercise7(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += n + " ";
    }
    result += row.trim() + "\n";
  }
  return result.trim();
}

console.log(exercise7(3));
