module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  
  let result = [];
  matrix.forEach((row, index) => {
      result = result.concat(index % 2 ? row.reverse() : row);
  });
  return result;
}
