let express = require('express');
const portNumber = 4200;

const app = express(); //make an instance of express
// const server = require("http").createServer(app); 
// let static = require('node-static'); // for serving static files (i.e. css,js,html...)
// const fs = require('fs');
app.get('/', requestHandler);// '/': default path, access 'requestHandler': custom function defined by user
// app.use('/index.html',errorRoute);
// app.use(express.static(__dirname + '/public'));
// app.use('/index',indexRoute);

app.use('/banana.html',errorRoute);
app.use('/veg',vegRoutes);
app.use('/fruit',fruitRoutes);
// app.use('/banana',bananaRoute);

app.use(function (req, res, next) {
  // req is the Node.js http request object
  // res is the Node.js http response object
  // next is a function to call to invoke the next middleware
})








function requestHandler(request,response){
  // send a default response to the client...
  response.send("HELLO WORLD");
   console.log(request); //built in
    console.log(response); //built  in
  console.log(request.url);
  }

  function fruitRoutes(req, res, next){
    // req is the Node.js http request object
   // res is the Node.js http response object
   // next is a function to call to invoke the next middleware
   console.log("IN FRUIT FUNCTION ");
   console.log(req);
  res.send("WE ARE HERE FRUIT ROUTE");
 }

 function vegRoutes(req, res, next){
  // req is the Node.js http request object
 // res is the Node.js http response object
 // next is a function to call to invoke the next middleware
 console.log("IN VEG FUNCTION ");
 console.log(req);
res.send("WE ARE HERE VEG ROUTE");
}

// function indexRoute(req, res, next){
//   res.sendFile(__dirname + '/public/index.html');
// }









app.listen(portNumber, function () {
  console.log("Server is running on port "+portNumber);
});
/// access methods that library has, '.listen' - start listening





// Pulling our concordance object from a separate "module" - concordance.js
// let WordCount= require('./wordCount');






// let file = fs.readFileSync('../files/children.txt', 'utf8');
// console.log(file);
// //END WORDCOUNT

// //NATURAL TEST
// const TFIDF = require('./TFIDF');
// let natural = require('natural');
// // console.log(natural)

// // let file = fs.readFileSync('files/children.txt', 'utf8');
// let tokenizer = new natural.WordTokenizer();

// // let stemmer = natural.PorterStemmer();

// // //WORD FREQUENCIES
// // let tokens = tokenizer.tokenize(file) 
// // // console.log(tokens);

// // // // TF-IDF - one file
// // // let tfIDF = new TFIDF();
// // // loadSamples();
// // // function loadSamples() {
// // //     tfIDF.termFreq(file);
// // //     tfIDF.docFreq(file);

// // //     tfIDF.finish(file.length);
// // //     tfIDF.sortByScore();
// // //     tfIDF.logTheDict();
// // // } //END TF_IDF

// // // //TF-IDF - multiple files
// // // let tfIDF = new TFIDF();
// // // loadSamples();

// // // function loadSamples() {
// // //     let filenames = ['dummies_coin.txt', 'gardening.txt', 'children.txt'];
  
// // //     for (let i = 0; i < filenames.length; i++) {
// // //         getTermFreq(filenames[i]);
// // //     }

// // //     for (let i = 0; i < filenames.length; i++) {
// // //         getDocFreq(filenames[i]);
// // //     }

// // //     tfIDF.finish(filenames.length);
// // //     tfIDF.sortByScore();
// // //     tfIDF.logTheDict();
// // // }

// // //   function getDocFreq(filename) {
// // //     let data =  fs.readFileSync('files/' + filename, 'utf8');
// // //      tfIDF.docFreq(data);
// // //  }

// // //   function getTermFreq(filename) {
// // //    let data =  fs.readFileSync('files/' + filename, 'utf8');
// // //     tfIDF.termFreq(data);
// // // } //END multiple TF-IDF


// // // let stemmer = natural.PorterStemmer();

// // // let tokens = tokenizer.tokenize(file)
// // // console.log(tokens);
// // // console.log(natural.PorterStemmer.stem(tokens[2]));
// // // let sentenceSplitter = new natural.SentenceTokenizer();

// // // //NGRAMS
// // // let NGrams = natural.NGrams;
// // // let bigrams = NGrams.trRuleSetigrams(file)
// // // console.log(bigrams);

// // //TAGGER
// // const language = "EN"
// // const defaultCategory = 'N';
// // const defaultCategoryCapitalized = 'NNP';

// // let lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
// // let ruleSet = new natural.RuleSet('EN');
// // let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
// // // console.log(tagger.tag(tokens));

// // let sentence = (tagger.tag(tokens).taggedWords);
// // // console.log(sentence);
// //  let verbArr = [];
// //  for (let i=0; i<sentence.length; i++) {
// //    if (sentence[i].tag === 'VBG') {
// //    verbG = (sentence[i].token);
   
// //  let newArr = verbArr.filter( function (item, index) { return(item.toLowerCase()!==verbG.toLowerCase())});
// //  verbArr =newArr;
// //  verbArr.push(verbG);
// // // console.log(newArr);
// //    }
// // }
// // // console.log(verbArr);
      

// //     // SENTIMENT ANALYZER
// // let Analyzer = require('natural').SentimentAnalyzer;
// // let stemmer = require('natural').PorterStemmer;
// // let analyzer = new Analyzer("English", stemmer, "senticon");

// // //console.log(analyzer.getSentiment(verbArr));
// // for (let i=0; i<verbArr.length; i++) {
// //  let res =  analyzer.getSentiment([verbArr[i]]);
// //  console.log(verbArr[i] + res);
// // }


