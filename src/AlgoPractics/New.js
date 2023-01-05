const equ = (array) => {
  let left = 0;
  let right = array.length - 1;
  let result = _equ(array, left, right);
  return result;
};
const _equ = (array, left, right) => {
  if (right < left) {
    return [];
  }
  const backArrayOfelements = array.slice(0, left);
  const nextArrayOfelements = array.slice(left + 1, right + 1);

  console.log("===>>>", backArrayOfelements, array[left], nextArrayOfelements);
  //   console.log(array, left, right);

  _equ(array, 0, left - 1);
  _equ(array, left + 1, right);
};

// equ(["a", "b"]);
equ(["a", "b", "c"]);
// equ([4, 5]);
// equ(["a", "b", "c", "d"]);
// console.log(equ(["a", "b"]));
