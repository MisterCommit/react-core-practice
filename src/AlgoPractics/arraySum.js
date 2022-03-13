// const sum = (num) => {
//   if (num.length === 0) return 0;
//   const restNumber = num.slice(1);
//   return num[0] + sum(restNumber);
// };

const sum = (array) => {
  return _sum(array, 0);
};

const _sum = (array, index) => {
  if (index === array.length) return 0;

  return array[index] + _sum(array, index + 1);
};

console.log(sum([2, 4, 6, 8, 20]));
