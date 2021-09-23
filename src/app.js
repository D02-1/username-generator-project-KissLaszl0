const fs = require('fs');
const path = require('path');

function getWords()
{
    
const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));
// console.log(path.resolve(__dirname, 'words.json'));
return json;

}

function createRandomNumber (maxNumber, minNumber)
{
    const num = Math.floor(Math.random()* (maxNumber - minNumber) + minNumber);
  
    return num;
}
createRandomNumber(10000, 50000);