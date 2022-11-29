// NODE to HTML
const portNumber = 4200;
const express = require("express");
const app = express(); //make an instance of express
// const server = require("http").createServer(app);
// Pulling our concordance object from a separate "module" - concordance.js
// Load a file for quick testing

//NATURAL
// const TFIDF = require('./TFIDF');
let natural = require("natural");
let fs = require("fs");
let file = fs.readFileSync("files/children.txt", "utf8");
let tokenizer = new natural.WordTokenizer();
// console.log(natural)

// create a server
app.use(express.static(__dirname + "/public"));
app.use("/client", clientRoute);
app.use("/data", dataCallback);

function clientRoute(req, res, next) {
  // console.log("hello world");
  res.sendFile(__dirname + "/public/index.html");
}

function dataCallback(request, response) {
  //WORD FREQUENCIES
  let tokens = tokenizer.tokenize(file);
  // console.log(tokens);

  //TAGGER
  const language = "EN";
  const defaultCategory = "N";
  const defaultCategoryCapitalized = "NNP";

  let lexicon = new natural.Lexicon(
    language,
    defaultCategory,
    defaultCategoryCapitalized
  );
  let ruleSet = new natural.RuleSet("EN");
  let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
  // console.log(tagger.tag(tokens));

  let sentence = tagger.tag(tokens).taggedWords;
  // console.log(sentence);
  let verbArr = [];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].tag === "VBG") {
      verbG = sentence[i].token;

      //  let newArr = verbArr.filter( function (item, index) { return(item.toLowerCase()!==verbG.toLowerCase())});
      //  verbArr =newArr;
      verbArr.push(verbG);

      //  // reference: https://medium.com/@estherspark91/how-to-get-the-word-count-in-an-array-using-javascript-8206f14f2f43
      function getWordFreq() {
        return verbArr.reduce((prev, nxt) => {
          prev[nxt] = prev[nxt] + 1 || 1;
          return prev;
        }, {});
      }
    }
  }
  let verbFreqCn = getWordFreq(verbArr);
  // console.log(verbArr);
  console.log(verbFreqCn);

  let TfIdf = natural.TfIdf;
  let tfIDF = new TfIdf();
  // tfIDF.addDocument(verbArr);
  // tfIDF.tfidfs('raising', function(i, measure) {
  //   console.log(i + measure)
  // });
  //   loadSamples();
  // function loadSamples() {
  //     tfIDF.termFreq(verbArr);
  //     tfIDF.docFreq(verbArr);
  //     tfIDF.finish(verbArr.length);
  //     tfIDF.sortByScore();
  //     tfIDF.logTheDict();
  // } //END TF_IDF

      // SENTIMENT ANALYZER
  let Analyzer = require('natural').SentimentAnalyzer;
  let stemmer = require('natural').PorterStemmer;
  let analyzer = new Analyzer("English", stemmer, "senticon");

  // console.log(analyzer.getSentiment(verbArr));

  let scoreArr = []
  for (let i=0; i<verbArr.length; i++) {
   let score =  analyzer.getSentiment([verbArr[i]]);
  //  console.log(verbArr[i] + res);
      scoreArr.push(score);
  }
  // console.log(scoreArr);

  // create final array
  let vbgScore = {};
  // let vbgFreq = [];
  // Loop to insert key & value in this object one by one
  for (let i = 0; i < verbArr.length; i++) {
      vbgScore[verbArr[i]] = scoreArr[i];
      // vbgFreq = verbFreqCn[i];
  }
  response.send(vbgScore);
  // console.log(result);
}

app.listen(portNumber, function () {
  console.log("Server is running on port " + portNumber);
});
