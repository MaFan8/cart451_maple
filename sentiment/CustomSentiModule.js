const Sentiment = require("sentiment");
class CustomSentiModule {
  constructor() {
    console.log("init");
    //make an instance of the module
    this.sentimentInstance = new Sentiment();
  }

// wrapper funtion to call from sentiment library and analyze
  runAnalysis(phrase){
    let analysedPhrase = this.sentimentInstance.analyze(phrase);
    return analysedPhrase;
  }
}
module.exports = CustomSentiModule;
