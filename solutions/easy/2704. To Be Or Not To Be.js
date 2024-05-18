var expect = function (val) {
  return {
    toBe: (comparedValue) => {
      if (val === comparedValue) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (comparedValue) => {
      if (val !== comparedValue) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
  };
};

/**
    
     * expect(5).notToBe(5); // throws "Equal"
     */

console.log(expect(5).toBe(2));
