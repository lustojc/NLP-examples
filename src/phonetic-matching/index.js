var natural = require('natural');
var metaphone = natural.Metaphone;
var soundEx = natural.SoundEx;

var wordA = 'see';
var wordB = 'sea';

if (metaphone.compare(wordA, wordB)) {
    console.log('They sound alike!');
} else {
    console.log('They sound diff');
}
    

// We can aso obtain the raw phonetics of a word using process()
console.log(metaphone.process('phonetics'));