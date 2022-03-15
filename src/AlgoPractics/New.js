const equ = (array) => {
  let left = 0;
  let right = array.length - 1;
  let result = _equ(array, left, right);
  return result;
};
const _equ = (array, left, right) => {
  if (right === left) {
    return [];
  } else if (right < left) {
    return [];
  }
  //   console.log(array, left, right);
  const backArrayOfelements = array.slice(0, left);
  const nextArrayOfelements = array.slice(left + 1, right + 1);

  const leftEquations = _equ(array, 0, left - 1);
  const rightEquations = _equ(array, left + 1, right);

  console.log(backArrayOfelements, array[left], nextArrayOfelements);
};

// equ(["a", "b"]);
equ(["a", "b", "c"]);
// console.log(equ(["a", "b"]));
