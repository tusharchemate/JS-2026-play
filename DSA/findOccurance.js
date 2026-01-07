const string = 'banana';

const findCharOcc = (str) => {
  let res = {};

  for (let ch in str) {
    res[str[ch]] = (res[str[ch]] || 0) + 1;
  }
  return res;
};

console.log(findCharOcc(string));
