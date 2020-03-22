module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let result_depth = depth;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        let current_depth = this.calculateDepth(element, depth+1);
        if (current_depth > result_depth) {
          result_depth = current_depth;
        };
      };
    });
    return result_depth;
  };
};
