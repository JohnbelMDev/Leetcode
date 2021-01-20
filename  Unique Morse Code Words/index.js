function letterToMorse(letter){
 let morseCodeArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let index = letter.toLowerCase().charCodeAt(0) - 97
  return morseCodeArray[index]

}

function wordToMorse(words){
  let wordSplit = words.toString().split('')
  let morse = [] ;
  for (let i = 0; i < wordSplit.length; i++) {
    morse.push(letterToMorse(wordSplit[i]))
  }
  return morse.join('')

}

console.log(wordToMorse(['gin']));
