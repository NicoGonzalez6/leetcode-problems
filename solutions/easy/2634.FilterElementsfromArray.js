/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredValues = [];
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index], index)) {
      filteredValues.push(arr[index]);
    }
  }

  return filteredValues;
};
