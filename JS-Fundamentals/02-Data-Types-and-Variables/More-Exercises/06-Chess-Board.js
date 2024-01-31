function printChessboard(n) {
  let result = '<div class="chessboard">\n';

  for (let i = 0; i < n; i++) {
    result += "  <div>\n";

    for (let j = 0; j < n; j++) {
      if ((i + j) % 2 === 0) {
        result += '    <span class="black"></span>\n';
      } else {
        result += '    <span class="white"></span>\n';
      }
    }

    result += "  </div>\n";
  }

  result += "</div>";
  console.log(result);
}
printChessboard(3);
