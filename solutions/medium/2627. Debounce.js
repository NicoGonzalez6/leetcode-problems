var debounce = function (fn, t) {
  this.timeout = undefined;
  return function (...args) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 1000);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
