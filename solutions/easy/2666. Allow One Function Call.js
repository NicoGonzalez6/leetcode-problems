let fn = (a, b, c) => a * b * c;

var once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};

let onceFn = once(fn);

console.log(onceFn(5, 7, 4));
console.log(onceFn(2, 3, 6));
console.log(onceFn(4, 6, 8));
