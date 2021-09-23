const fs = require('fs');
const path = require('path');

function getWords()
{
const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

console.log(path.resolve(__dirname, 'words.json'));


//console.log(json);
}

getWords();