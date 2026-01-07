const sentence = 'to king bye s'

const findLongestString = (s) => {
  let res = s.split(' ').sort((a, b) => b.length - a.length)

  return res[0]
}

console.log(findLongestString(sentence))
