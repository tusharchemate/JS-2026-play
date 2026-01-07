const word = "tushar chemate";

const reverseWord = (word)=> {
    return word.split(" ").reverse().join(" ");
}

console.log(reverseWord(word));