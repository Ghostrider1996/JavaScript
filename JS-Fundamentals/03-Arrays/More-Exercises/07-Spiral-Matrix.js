function moreExercise7(rows, cols) {
    let matrix = Array(rows).fill().map(() => Array(cols).fill(0));
    
    let counter = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Move from left to right
      for (let i = startCol; i <= endCol; i++) {
        matrix[startRow][i] = counter++;
      }
      startRow++;
  
      // Move from top to bottom
      for (let i = startRow; i <= endRow; i++) {
        matrix[i][endCol] = counter++;
      }
      endCol--;
  
      // Move from right to left
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          matrix[endRow][i] = counter++;
        }
        endRow--;
      }
  
      // Move from bottom to top
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          matrix[i][startCol] = counter++;
        }
        startCol++;
      }
    }
  
    // Print the generated matrix
    for (let row of matrix) {
      console.log(row.join(' '));
    }
  }
// moreExercise7(5, 5);
moreExercise7(3, 3);
