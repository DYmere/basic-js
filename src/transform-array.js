module.exports = function transform(arr) {
  if (!Array.isArray(arr)) { throw Error(); };  

  let transformed_arr = [];

  for (let i=0; i<arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i++;
    }
    else if (arr[i] == "--discard-prev") {
      transformed_arr.pop();
    }
    else if (arr[i] == "--double-next") {
      if (i+1 >= arr.length) {
        continue;
      }
      transformed_arr.push(arr[i+1]);
    }
    else if (arr[i] == "--double-prev") {
      if (i > 1) {
        transformed_arr.push(arr[i-1]);
      };
    }
    else {
      transformed_arr.push(arr[i]);
    };
  };
  return transformed_arr;
};
