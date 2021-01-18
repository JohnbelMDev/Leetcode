function letterToMorse(letter){
 let morseCodeArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let index = letter.toLowerCase().charCodeAt(0) - 97
  return morseCodeArray[index]



}

function wordToMorse(word){
  let wordSplit = word.split('')
  for (var i = 0; i < wordSplit.length; i++) {
     console.log(letterToMorse(i));
  }
  console.log(wordSplit);
}

console.log(wordToMorse('abc'));
