const combinations = (elements) => {
  if (elements.length === 0) return [[]];

  const firstElement = elements[0];
  const restElemets = elements.slice(1);

  const combinationsWithOutFirst = combinations(restElemets);
  const combinationsWithFirst = [];

  combinationsWithOutFirst.forEach((com) => {
    const comWithFirst = [...com, firstElement];
    combinationsWithFirst.push(comWithFirst);
  });

  return [...combinationsWithOutFirst, ...combinationsWithFirst];
};

console.log(combinations(["a", "b", "c"]));
