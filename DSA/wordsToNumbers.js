const words = 'one zero three five seven nine six six eight four';

const wordsToNumber = (str) => {
  const numMap = {
    one: 1,
    zero: 0,
    three: 3,
    five: 5,
    seven: 7,
    six: 6,
    two: 2,
    eight: 8,
    four: 4,
    nine: 9,
  };
  let res = '';
  let splitStr = str.split(' ');
  for (let i = 0; i <= splitStr.length - 1; i++) {
    res += numMap[splitStr[i]];
  }
  return +res;
};

console.log(wordsToNumber(words));
