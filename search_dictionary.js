const Dictionary = require('./dictionary.js');

class Interface {
  constructor(){
    this.dictionary = new Dictionary()
    console.log(this.dictionary)
  }

  validNumber(userInput){
    const validDigits = '01234567890-*#'
    const inputArray = userInput.split('')

    if (inputArray.length > 12) {
      return false;
    }

    const validInput = inputArray.every((char) => {
      return validDigits.indexOf(char) > -1
    })
    return validInput
  }

  promptInput(reader, callback){
    reader.question("Enter a number: ", input => {
        callback(input);
      }
    )
  }

  run(reader){
    this.promptInput(reader, (phoneNumber) => {
      if (!this.validNumber(phoneNumber)) {
          console.log("Invalid number!");
      } else {
        const parsedPhoneNumber = phoneNumber.split('-')
        const returnWords = this.searchDictionary(parsedPhoneNumber)
      }
    })
  }
}


module.exports = Interface;
