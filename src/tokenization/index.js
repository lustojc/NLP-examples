var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));

const str = 'I love playing football'

console.log(str.split(' '));