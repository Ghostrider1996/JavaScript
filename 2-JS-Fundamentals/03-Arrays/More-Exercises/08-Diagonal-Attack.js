function equalDiagonals(matrix) {
  // Parse the input matrix
  let parsedMatrix = matrix.map((row) => row.split(" ").map(Number));

  // Calculate the sums of the main diagonals
  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < parsedMatrix.length; i++) {
    mainDiagonalSum += parsedMatrix[i][i];
    secondaryDiagonalSum += parsedMatrix[i][parsedMatrix.length - 1 - i];
  }

  // Check if the sums are equal
  if (mainDiagonalSum !== secondaryDiagonalSum) {
    // If not equal, print the original matrix
    for (let row of parsedMatrix) {
      console.log(row.join(" "));
    }
  } else {
    // If equal, set every element not part of diagonals to the sum
    for (let i = 0; i < parsedMatrix.length; i++) {
      for (let j = 0; j < parsedMatrix[i].length; j++) {
        if (i !== j && j !== parsedMatrix.length - 1 - i) {
          parsedMatrix[i][j] = mainDiagonalSum;
        }
      }
    }

    // Print the modified matrix
    for (let row of parsedMatrix) {
      console.log(row.join(" "));
    }
  }
}

// Example usage:
equalDiagonals([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
