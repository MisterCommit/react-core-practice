const a = [];
const possibleWays = [];
const targetNumber = 22;

const check = (first, second) => {
  if (first + second === targetNumber) {
    possibleWays.push({ str: ` ${first} + ${second} = ${targetNumber}` });
  } else if (first * second === targetNumber) {
    possibleWays.push({ str: ` ${first} * ${second} = ${targetNumber}` });
  } else if (first - second === targetNumber) {
    possibleWays.push({ str: ` ${first} - ${second} = ${targetNumber}` });
  } else if (second - first === targetNumber) {
    possibleWays.push({ str: ` ${first} - ${second} = ${targetNumber}` });
  } else if (first / second === targetNumber && second !== 0) {
    possibleWays.push({ str: ` ${first} / ${second} = ${targetNumber}` });
  } else if (second / first === targetNumber && first !== 0) {
    possibleWays.push({ str: ` ${first} / ${second} = ${targetNumber}` });
  }
};

const _checkWithMinus = (number) => {
  if (number === targetNumber * -1) {
    possibleWays.push(`-(${number}) = ${targetNumber}`);
  }
};
const equ = (array) => {
  const equations = _equ(array, 0, array.length - 1);
  return equations;
};

const _equ = (array) => {
  const results = [];

  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    _checkWithMinus(array[0]);
    return [array[0]];
  }
  const firstNumber = array[0];
  const resNumbers = array.slice(1);

  const allCompWithOut = _equ(resNumbers);

  allCompWithOut.forEach((e) => {
    for (let i = 0; i <= e.length; i++) {
      results.push(e + firstNumber);
      results.push(firstNumber + e);
    }
  });

  return results;
};

// equ(["a", "b", "c"]);

equ([2, 3, 7, 20, 1]);
console.log(equ([2, 3, 7, 20, 1]));
console.log(possibleWays);
// console.log(equ([7, 5, 14]));
