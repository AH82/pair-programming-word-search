

const diagonalizeMatrix = function(matrix) {

  const diagonalResult = [];
  
  for (let k = 0; k < matrix.length; k++) {
    const row = [];
    let i = k;
    let j = 0;
    while (i >= 0 && j < matrix[i].length) {
      row.push(matrix[i][j]);
      i--;
      j++;
    }
    diagonalResult.push(row);
  }
  
  for (let k = 1; k < matrix[0].length; k++) {
    const row = [];
    let i = matrix.length - 1;
    let j = k;
    while (j < matrix[0].length) {
      row.push(matrix[i][j]);
      i--;
      j++;
    }
    diagonalResult.push(row);
  }

  return diagonalResult;
};


module.exports = diagonalizeMatrix;

/*

 * Logic reference for this algorithm :
 * https://youtu.be/T8ErAYobcbc
 
 */



// Test Code
// =========
/*
// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(diagonalizeMatrix([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(diagonalizeMatrix([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(diagonalizeMatrix([
  [1, 2, 3],
  [4, 5, 6]
]));

console.log('----');

// printMatrix(diagonalizeMatrix([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));
*/