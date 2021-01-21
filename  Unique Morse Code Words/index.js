function letterToMorse(letter){
 let morseCodeArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let index = letter.toLowerCase().charCodeAt(0) - 97 
  return morseCodeArray[index]

}

function wordToMorse(word){
  let wordSplit = word.split('')
  let morseWord = [] ;

  for (let i = 0; i < word.length; i++) {
    morseWord.push(letterToMorse(wordSplit[i]))
  }
  return morseWord.join('')
}


function wordsToMorse(words){
   let morseCode = []

  for (var i = 0; i < words.length; i++) {
    morseCode.push(wordToMorse(words[i]))

  }
  return morseCode
}

function uniqueMorseRepresentations(words){
  let morseCodeWords = wordsToMorse(words);
  let uniqueWords = [...new Set(morseCodeWords)].length
  console.log(uniqueWords);

}
console.log(wordToMorse("gin"));
console.log(wordsToMorse(["gin", "zen", "gig", "msg"]));

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
