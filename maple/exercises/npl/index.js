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
let fs = require('fs');

// // And we'll look at all files in the jane austen directory
// let file = fs.readFileSync('../files/dummies_coin.txt', 'utf8');
// console.log(file);
// //END WORDCOUNT

//NATURAL TEST
const TFIDF = require('./TFIDF');
let natural = require('natural');
// console.log(natural)

let file = fs.readFileSync('files/children.txt', 'utf8');
let tokenizer = new natural.WordTokenizer();

// let stemmer = natural.PorterStemmer();

//WORD FREQUENCIES
let tokens = tokenizer.tokenize(file) 
// console.log(tokens);

// // TF-IDF - one file
// let tfIDF = new TFIDF();
// loadSamples();
// function loadSamples() {
//     tfIDF.termFreq(file);
//     tfIDF.docFreq(file);

//     tfIDF.finish(file.length);
//     tfIDF.sortByScore();
//     tfIDF.logTheDict();
// } //END TF_IDF

// // TF-IDF - multiple files
// let tfIDF = new TFIDF();
// loadSamples();

// function loadSamples() {
//     let filenames = ['dummies_coin.txt', 'gardening.txt', 'children.txt'];
  
//     for (let i = 0; i < filenames.length; i++) {
//         getTermFreq(filenames[i]);
//     }

//     for (let i = 0; i < filenames.length; i++) {
//         getDocFreq(filenames[i]);
//     }

//     tfIDF.finish(filenames.length);
//     tfIDF.sortByScore();
//     tfIDF.logTheDict();
// }

//   function getDocFreq(filename) {
//     let data =  fs.readFileSync('files/' + filename, 'utf8');
//      tfIDF.docFreq(data);
//  }

//   function getTermFreq(filename) {
//    let data =  fs.readFileSync('files/' + filename, 'utf8');
//     tfIDF.termFreq(data);
// } //END multiple TF-IDF


// let stemmer = natural.PorterStemmer();

// let tokens = tokenizer.tokenize(file)
// console.log(tokens);
// console.log(natural.PorterStemmer.stem(tokens[2]));
// let sentenceSplitter = new natural.SentenceTokenizer();

// //NGRAMS
// let NGrams = natural.NGrams;
// let bigrams = NGrams.trigrams(file)
// console.log(bigrams);

//TAGGER
const language = "EN"
const defaultCategory = 'N';
const defaultCategoryCapitalized = 'NNP';

let lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
let ruleSet = new natural.RuleSet('EN');
let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
// console.log(tagger.tag(tokens));

let sentence = (tagger.tag(tokens).taggedWords);
// console.log(sentence);
let count = 0;
for (let i=0; i<sentence.length; i++) {
    if (sentence[i].tag === 'VBG') {
       verbG = (sentence[i].token);
       let verbArr = [];
       verbArr.push(verbG);
    //    REMOVE DUPLICATES
    //    let uniqueVerbs = [...new Set(verbArr)];
    //    console.log(uniqueVerbs);
    function removeDup(verbArr) {
        return verbArr.filter((item, index) => verbArr.indexOf(item) === index);
    }
    console.log(removeDup(verbArr));
    
    }

}






// for (let i=0; i<sentence.length; i++) {
//     if (sentence.tag === 'N') {
//         console.log(sentence.token);
//     }
//     // console.log();
// }

// function search(token, sentence){
//     for (let i=0; i < sentence.length; i++) {
//         if (sentence[i].tag === 'N') {
//             return myArray[i];
//         }
//     }
// }
// const resultObject = search(tag, sentence);
// console.log(resultObject)

// let POS = "tag: 'N'";
// let result = sentence.includes(POS);
// console.log(result); // Output = true





// Brill_POS_Tagger.prototype.applyRules = function(tokens) {
//     for (let i = 0, size = sentence.taggedWords.length; i < size; i++) {
//       this.ruleSet.getRules().forEach(function(rule) {
//         rule.apply(tokens, i);
//       });
//     }
//     return sentence;
//   };
  


// let tester = new natural.BrillPOSTester();
// // var tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
// let scores = tester.test(tokens[1], tagger);
// console.log("Test score lexicon " + scores[0] + "%");
// console.log("Test score after applying rules " + scores[1] + "%");


// nextTagParameterValues();
// function nextTagParameterValues(file, i) {
//     if (i < file.length - 1) {
//       return [file[i + 1].tag];
//     }
//     else {
//       return [];
//     }
//   }
  
// END Tagger

// WORDNET
// let wordnet = new natural.WordNet();
// wordnet.lookup('coin', function(results) {
//     results.forEach(function(result) {
//         console.log('------------------------------------');
//         console.log(result.synsetOffset);
//         console.log(result.pos);
//         console.log(result.lemma);
//         console.log(result.synonyms);
//         console.log(result.gloss);
//     });
// }); //END wordnet

// // SENTIMENT ANALYZER
// let Analyzer = require('natural').SentimentAnalyzer;
// let stemmer = require('natural').PorterStemmer;
// let analyzer = new Analyzer("English", stemmer, "pattern");
// // getSentiment expects an array of strings
// // console.log(analyzer.getSentiment(["I", "like", "cherries"]));
// // // 0.6666666666666666
// console.log(analyzer.getSentiment(tokens));

//// PHONETICS
// let natural = require('natural');
// let metaphone = natural.Metaphone;
// let soundEx = natural.SoundEx;

// let wordA = 'phonetics';
// let wordB = 'fonetix';

// if(metaphone.compare(wordA, wordB))
//     console.log('they sound alike!');

//     console.log(metaphone.process('phonetics'));
//     console.log(metaphone.process('phonetics', 3));

//     // console.log('phonetics'.phonetics());
//     console.log('phonetics rock'.tokenizeAndPhoneticize());if(soundEx.compare(wordA, wordB));

