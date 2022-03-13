const calFactorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return n * calFactorial(n - 1);
};

console.log(calFactorial(4));
