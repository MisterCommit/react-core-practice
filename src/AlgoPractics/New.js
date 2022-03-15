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

  const leftEquations = _equ(array, 0, left - 1);
  const rightEquations = _equ(array, left + 1, right);
  const reults = [];
  for (let i = 0; i < rightEquations.length; i++) {
    reults.push(`${backArrayOfelements} ${array[left]} ${rightEquations[i]}`);
  }

  console.log("leftEquations", leftEquations, rightEquations);
  return reults;
};

// equ(["a", "b"]);
// equ(["a", "b", "c"]);
equ([2, 4, 5]);
// equ(["a", "b", "c", "d"]);
// console.log(equ(["a", "b"]));
