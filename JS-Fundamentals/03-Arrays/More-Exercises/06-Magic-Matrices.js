function isMagical(matrix) {
  // Check if the matrix is empty
  if (matrix.length === 0 || matrix[0].length === 0) {
    console.log("false");
    return;
  }

  // Calculate the sum of the first row to compare with other rows and columns
  let firstRowSum = matrix[0].reduce((acc, num) => acc + num, 0);

  // Check the sum of each row
  for (let i = 1; i < matrix.length; i++) {
    let rowSum = matrix[i].reduce((acc, num) => acc + num, 0);

    if (rowSum !== firstRowSum) {
      console.log("false");
      return;
    }
  }

  // Check the sum of each column
  for (let i = 0; i < matrix[0].length; i++) {
    let colSum = 0;

    for (let j = 0; j < matrix.length; j++) {
      colSum += matrix[j][i];
    }

    if (colSum !== firstRowSum) {
      console.log("false");
      return;
    }
  }

  // If all sums are equal, the matrix is magical
  console.log("true");
}

// Example usage:
isMagical([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
