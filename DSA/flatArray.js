const arr = [[1, 2, [4]], 5, 6, 66, 6, [88]];

const flatternArray = (arr) => {
  let flat = [];

  for (let num of arr) {
    if (Array.isArray(num)) {
      flat.push(...flatternArray(num));
    } else {
      flat.push(num);
    }
  }
  return flat;
};

console.log(flatternArray(arr));
