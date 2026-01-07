const str = 'tushar devidas chemate';

const capsFirstWord = (str) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] == ' ') {
      res += str[i].toUpperCase();
    } else {
      res += str[i].toLowerCase();
    }
  }
  return res;
};

console.log(capsFirstWord(str));
