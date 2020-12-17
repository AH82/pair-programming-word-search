

const diagonalizeMatrix = function(matrix) {

  const diagonalResult = [];
  
  for (let k = 0; k < matrix.length; k++){
    const row = []
    i = k;
    j = 0;
    while (i >= 0 && j < matrix[i].length) {
      row.push(matrix[i][j])
      i--;
      j++;
    }
    diagonalResult.push(row)
  }
  
  for (let k = 1; k < matrix[0].length; k++) {
    const row = []
    i = matrix.length - 1;
    j = k;
    while ( j < matrix[0].length) {
      row.push(matrix[i][j]);
      i--;
      j++
    }
    diagonalResult.push(row)
  }

  return diagonalResult;
};


const diagonalizeMatrixReverse = function(matrix) {
  const mirrorMatrix = [];
  for (let row of matrix) {
    mirrorMatrix.push(row.reverse())
  }
  return diagonalizeMatrix(mirrorMatrix)
}


module.exports = {
  diagonalizeMatrix,
  diagonalizeMatrixReverse
};




// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(diagonalizeMatrixReverse([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(diagonalizeMatrixReverse([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(diagonalizeMatrixReverse([
  [1, 2, 3],
  [4, 5, 6]
]));

console.log('----');

// printMatrix(diagonalizeMatrix([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));

/* 

 * Logic reference for this algorithm : 
 * https://youtu.be/T8ErAYobcbc 
 
 */