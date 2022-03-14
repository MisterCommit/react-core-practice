const equ = (array) => {
  let left = 0;
  let right = array.length - 1;
  let result = _equ(array, left, right);
  return result;
};

const _equ = (array, left, right) => {
  const element = array[left];
  console.log(element);
  let rightEqu = _equ(array, left + 1, right);
  let leftEqu = _equ(array, 0, left - 1);
};
