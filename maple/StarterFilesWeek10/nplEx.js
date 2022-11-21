// const portNumber = 4200;
// const app = express(); //make an instance of express
// const server = require("http").createServer(app);
// Pulling our concordance object from a separate "module" - concordance.js
// Load a file for quick testing

let natural = require('natural');
// console.log(natural);
let tokenizer = new natural.WordTokenizer();
let tokens = tokenizer.tokenize("Last week, the University of Cambridge shared its own research that shows if everyone wears a mask outside home,dreaded ‘second wave’ of the pandemic can be avoided.")
console.log(tokens);





// const nplEx = require('./nplEx');
// let fs = require('fs');

// let nplEx = new nplEx();

// loadSamples();