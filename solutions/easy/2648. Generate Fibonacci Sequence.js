var fibGenerator = function* () {
  let prev = 0;
  let curr = 0;
  let firstLap = true;
  while (true) {
    if (firstLap) {
      yield curr;
      curr = 1;
      prev = 0;
      firstLap = false;
    } else {
      yield curr;
      curr = prev + curr;
      prev = curr - prev;
    }
  }
};

var fibonacci = fibGenerator();
