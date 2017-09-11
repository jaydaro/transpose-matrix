
function transpose(matrix) {
    if (matrix.some(row => row.length !== matrix[0].length)) {
    return [null];
  }
  const longestRow = matrix.reduce((acc,row, index) => {
    if (index === 1){
      return acc
    }
    if (row.length > acc.length){
      return row
    }
    return index
  });
  const longestSide = longestRow > matrix.length - 1 ? longestRow : matrix.length - 1;

  return matrix[longestSide].map((row, rowIndex) => matrix.map(row => row[rowIndex]));
}

module.exports = { transpose };
