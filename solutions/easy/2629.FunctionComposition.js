/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let currentValue;
    if (functions.length === 0) {
      return (currentValue = x);
    } else {
      for (const iterator of functions.reverse()) {
        const nextValue = currentValue ? iterator(currentValue) : iterator(x);
        currentValue = nextValue;
      }
    }

    return currentValue;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
