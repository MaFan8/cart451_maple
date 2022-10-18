const fs = require('fs');
const fileContainer = './myFiles/fileA.txt';

let data = "this is my test string written at "+(new Date)+"to "+fileContainer;
fs.writeFileSync(fileContainer, data);

let dataTwo= "this is my second test string written at "+(new Date)+"to "+fileContainer;
fs.writeFileSync(fileContainer, dataTwo);

let dataThird = "this is my third test string written at "+(new Date)+"to "+fileContainer+"\n"+"more text on second line";
fs.writeFileSync(fileContainer, dataThird);
// '/n' = FORMATTING CHARATERS

// if there is more than one data written, it will overwrite it
// APPEND to put at bottom of file
let textToAppend = "\n" + (new Date) + " Text copied and appended  to " + fileContainer;
fs.appendFileSync(fileContainer, textToAppend);