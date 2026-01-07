const str = 'aaabbbccccsssssccc';

const removeDuplicates = (str) => {
  let uniqueValues = [];

  for (let ch of str) {
    if (!uniqueValues.includes(ch)) uniqueValues.push(ch);
  }
  return uniqueValues.join('');
};

console.log(removeDuplicates(str));
