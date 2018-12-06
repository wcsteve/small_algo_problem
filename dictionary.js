const txtFile = "sample_dictionary.txt";
const fs = require('fs');
const str = fs.readFileSync(txtFile,'utf8');
const numPadConversion = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

class Dictionary {
  constructor() {
    this.words = {}
  }

  buildDictionary(){
    let dictionary = str.split('\n');
    dictionary.forEach((word) => {
      this.insertWord(word);
    })
    return dictionary;
  }

  insertWord(word) {
    let placeInDictionary = this.words;
    let currentLetter;

    for (let i = 0; i < word.length; i++) {
      currentLetter = word.charAt(i);
      
      if (placeInDictionary[currentLetter]) {
        placeInDictionary = placeInDictionary[currentLetter]
      } else {
        placeInDictionary[currentLetter] = {};
        placeInDictionary = placeInDictionary[currentLetter]
      }
    }

    placeInDictionary.end = true
  }

  wordBuilder(number) {

  }

  // checkWord should be replaced with a check number method
  // similar logic but recursively search through valid permutations of number translated to letters in dictionary.words

  checkWord(word) {
    let chars = word.split('');
    let placeInDictionary = this.words;

    for (let i = 0; i < chars.length ; i++) {
      let currentChar = word[i];
      if (placeInDictionary[currentChar]) {
         placeInDictionary = placeInDictionary[currentChar];
      } else {
        return false;
      }
    }

    return placeInDictionary.end === true;
  }
}



module.exports = Dictionary;
