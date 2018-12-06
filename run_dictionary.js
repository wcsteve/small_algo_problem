const Interface = require('./search_dictionary.js');
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let d = new Interface();
d.run(reader)
