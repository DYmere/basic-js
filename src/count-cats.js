module.exports = function countCats(matrix) {
  let count = 0;
  for (var i of matrix) {
    for (let j of i) {
      if (j == "^^") { count++ };
    };
  };
  return count;
};
