const arr = [1, 2, 3, 4, 5, 6];

const size = 5;

var chunk = function (arr, size) {
  const chunkedArr = [];
  let c = 0;
  let s = size;

  while (c < arr.length) {
    chunkedArr.push(arr.slice(c, s));
    c += size;
    s += size;
  }
  return chunkedArr;
};

chunk(arr, size);
