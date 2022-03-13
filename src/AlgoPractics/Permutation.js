const a = [];

const permutation = (elements) => {
  if (elements.length === 0) return [[]];
  const firstElement = elements[0];
  const restElemets = elements.slice(1);
  const permutationWithOutFirst = permutation(restElemets);

  const allPermuatation = [];
  permutationWithOutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permutationWithFirst = [
        ...perm.slice(0, i),
        firstElement,
        ...perm.slice(i),
      ];

      //   console.log(
      //     "0,i==>>",
      //     ...perm.slice(0, i),
      //     "<==first",
      //     firstElement,
      //     "perm",
      //     ...perm.slice(i)
      //   );

      let str = "";
      if (perm.slice(0, i).length > 0) {
        str = str + `${perm.slice(0, i)} + `;
      }
      str = str + `${firstElement}`;
      if (perm.slice(i).length > 0) {
        str = str + ` + ${perm.slice(i)} `;
      }
      a.push(str);

      allPermuatation.push(permutationWithFirst);
    }
  });

  return allPermuatation;
};

permutation(["a", "b", "c"]);
// console.log(permutation(["a" , "b"]));

// permutation(["a", "b"]);

console.log(a);
