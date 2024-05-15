/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const filteredValues = [];
  for (let index = 0; index < arr.length; index++) {
    filteredValues.push(fn(arr[index], index));
  }

  return filteredValues;
};
