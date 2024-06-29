function orbit(input) {
    let [width, height, x, y] = input;
  
    let matrix = [];
  
    // Initialize the matrix with zeros
    for (let i = 0; i < height; i++) {
      matrix.push(new Array(width).fill(0));
    }
  
    // Set the star position
    matrix[x][y] = 1;
  
    // Function to fill the orbit levels
    function fillOrbitLevel(level) {
      for (let row = Math.max(0, x - level); row <= Math.min(height - 1, x + level); row++) {
        for (let col = Math.max(0, y - level); col <= Math.min(width - 1, y + level); col++) {
          if (matrix[row][col] === 0) {
            matrix[row][col] = level + 1;
          }
        }
      }
    }
  
    // Fill the orbits
    for (let i = 1; i < Math.max(width, height); i++) {
      fillOrbitLevel(i);
    }
  
    // Print the matrix
    for (let row of matrix) {
      console.log(row.join(' '));
    }
  }
  
  // Example usage:
//   orbit([4, 4, 0, 0]);
//   orbit([5, 5, 2, 2])
  orbit([3, 3, 2, 2])