const number = '0123454';

const numsToWords = (str) => {
  const words = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];
  let res = '';

  for (let val of str) {
    res += words[val] + ' ';
  }
  return res;
};

console.log(numsToWords(number));
