// helper function: transpose
const transpose = function(matrix) {
  const transposedMatrix = [];
  for  (let j = 0; j < matrix[0].length; j++) {
    const transposedRow = [];
    for (const row of matrix) {
      transposedRow.push(row[j]);
    }
    transposedMatrix.push(transposedRow);
  }
  return transposedMatrix;
};
module.exports = transpose;