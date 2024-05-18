const addTwoPromises = async function (promise1, promise2) {
  let total = 0;
  await Promise.all([promise1, promise2]).then((values) => {
    return values.map((val) => (total += val));
  });

  return total;
};

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then((res) => res);
