const targetNumber = 21;

let possibleWay = [];

const validate = (firstNumber, secondNumber, firstEquation, secondEquation) => {
  if (firstNumber + secondNumber === targetNumber) {
    possibleWay.push(`${firstEquation} + ${secondEquation}`);
  }
  if (firstNumber * secondNumber === targetNumber) {
    possibleWay.push(`${firstEquation} x ${secondEquation}`);
  }
  if (firstNumber - secondNumber === targetNumber) {
    possibleWay.push(`${firstEquation} - ${secondEquation}`);
  }
  if (secondNumber - firstNumber === targetNumber) {
    possibleWay.push(`${firstEquation} - ${secondEquation}`);
  }
};

const returnNumber = (number) => {
  if (number.res) {
    return number.res;
  }
  return number;
};

const retunEquation = (equation) => {
  if (equation.str) {
    return `( ${equation.str} )`;
  }
  return equation.toString();
};

const equ = (array) => {
  let left = 0;
  let right = array.length - 1;
  let result = _equ(array, left, right);
  return result;
};

const _equ = (array, left, right) => {
  const results = [];
  if (left > right) {
    return results;
  }
  if (left === right) {
    results.push(array[left]);
    return results;
  }

  for (let i = left; i < right; i++) {
    let result1 = _equ(array, left, i);
    let result2 = _equ(array, i + 1, right);
    for (let x = 0; x <= result1.length - 1; x++) {
      for (let y = 0; y <= result2.length - 1; y++) {
        let firstNumber = returnNumber(result1[x]);
        let secondNumber = returnNumber(result2[y]);
        let firstEquation = retunEquation(result1[x]);
        let secondEquation = retunEquation(result2[y]);

        validate(firstNumber, secondNumber, firstEquation, secondEquation);

        results.push({
          res: firstNumber + secondNumber,
          str: `${firstEquation} + ${secondEquation}`,
        });
      }
    }
  }
  return results;
};

equ([2, 3, 7, 24]);
