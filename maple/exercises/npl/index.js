// // WORDCOUNT
// // const portNumber = 4200;
// // const app = express(); //make an instance of express
// // const server = require("http").createServer(app);
// // Pulling our concordance object from a separate "module" - concordance.js
// let WordCount= require('./wordCount');

// // make server listen for incoming messages
// // server.listen(portNumber, function () {
// //     console.log("listening on port:: " + portNumber);
// //   });

// // app.use(express.static('public'));
// let fs = require('fs');

// // And we'll look at all files in the jane austen directory
// let file = fs.readFileSync('../files/dummies_coin.txt', 'utf8');
// console.log(file);
// //END WORDCOUNT

//NATURAL TEST
const TFIDF = require('./TFIDF');
let fs = require('fs');
let natural = require('natural');
// console.log(natural)
let file = fs.readFileSync('../files/dummies_coin.txt', 'utf8');
let tokenizer = new natural.WordTokenizer();

// let stemmer = natural.PorterStemmer();

//WORD FREQUENCIES
// let tokens = tokenizer.tokenize(file)
// console.log(tokens);

// TF-IDF

let tfIDF = new TFIDF();

loadSamples();

function loadSamples() {
    // let file = ['dummies_coin.txt'];
  
    // for (let i = 0; i < filenames.length; i++) {
    //     getTermFreq(filenames[i]);
    // }
    tfIDF.termFreq(file);


    // for (let i = 0; i < filenames.length; i++) {
    //     getDocFreq(filenames[i]);
    // }
    tfIDF.docFreq(file);


    tfIDF.finish(file.length);
    tfIDF.sortByScore();
    tfIDF.logTheDict();
}

//   function getDocFreq(filename) {
//     let data =  fs.readFileSync('../files/' + filename, 'utf8');
//      tfIDF.docFreq(data);
//  }

//   function getTermFreq(filename) {
//    let data =  fs.readFileSync('../files/' + filename, 'utf8');
//     tfIDF.termFreq(data);
// }



 
 





// console.log(natural.PorterStemmer.stem(tokens[8]));
// let sentenceSplitter = new natural.SentenceTokenizer();
// let NGrams = natural.NGrams;

// let bigrams = NGrams.bigrams("the lazy dog jumped over the high mountains.")
// console.log(bigrams);

//let lexicon = new
// const language = "EN"
// const defaultCategory = 'N';
// const defaultCategoryCapitalized = 'NNP';

// let lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
// let ruleSet = new natural.RuleSet('EN');
// let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);

// console.log(tagger.tag(tokens));

// var wordnet = new natural.WordNet();

// wordnet.lookup('chair', function(results) {
//     results.forEach(function(result) {
//         console.log('------------------------------------');
//         console.log(result.synsetOffset);
//         console.log(result.pos);
//         console.log(result.lemma);
//         console.log(result.synonyms);
//         console.log(result.gloss);
//     });
// });

// END Natural test