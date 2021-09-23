const fs = require('fs');
const path = require('path');
const { DefaultDeserializer } = require('v8');

function getWords()
{
    
const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));
// console.log(path.resolve(__dirname, 'words.json'));
return json;

}
/**
 * @function createRandomNummer
 * @description Creates a random Number with min und max value
 * @param {*} maxNumber 
 * @param {*} minNumber 
 * @returns 
 */
function createRandomNumber (maxNumber, minNumber)
{
    const num = Math.floor(Math.random()* (maxNumber - minNumber) + minNumber);
  
    return num;
}
//createRandomNumber(10000, 50000);

 /**
  * @function ertellt from word erst upper und rest lowercase
  * @param {*} word 
  * @returns 
  */

function capitalizeString(word)
{
    if ( word === undefined || word.length === 0 || !isNaN(word))
    {
        return "Default";
    }

    const wordStart = word.charAt(0).toUpperCase();
    const wordRest = word.substring(1).toLowerCase();

    return wordStart+wordRest;
}

//console.log(capitalizeString("kismikulas"));


function createRandomUsername(maxNumber)
{
    const words = getWords();

    const adj = words.adjs[Math.floor(Math.random() * (words.adjs.length - 1))];

    console.log(adj);

    const noun =  words.nouns[Math.floor(Math.random() * (words.nouns.length - 1))];

    console.log(noun);

    const randomNummer = createRandomNumber(10000, maxNumber);

    const finalUserName = `${capitalizeString(adj)}${capitalizeString(noun)}${maxNumber !== 0 ? randomNummer : ''}`;

    console.log(finalUserName);
}

createRandomUsername(50000);