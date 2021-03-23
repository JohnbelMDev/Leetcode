/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

    //taking two array parameters of values string
    // returning true if parameter1 is the same as the parameter2 once concaneted

 //example
    //["mnop",'b'], ['m','nm','opb'] => 'mnopb', mnmopb => false
    //['bc','dc'], ['b','cdc'] => 'bcdc', 'bcdc' => true

  // return word.join('') === word2.join('')
  //The join method is one iteration under the hood O(n) + O(n)
     //word.join('') === word2.join('')



//constraint

   // 1 <= word1.length
      // 1 is the lowest length of the array we can have
     //word2.length <= 10^3
   // word2.length has to be lower then a 1000 or equal but it cannot be above

//1 <= word1[i].length
   // one has to be the smalles value for each length of letter or letters

//word1[i].length >= 1

    // each length of letter or letters has to be greater or equal to 1

//word2[i].length <= 10^3
  // each letter or letters has to be smaller or equal to 1000

//1 <= sum(word1[i].length)
//the length of all the elements inside of word1 when added together is at least1
//This would not be allowed because the string doesn't add up to 1["",""]

//sum(word2[i].length)
//if we add up all the length inside of word2 it has to be smaller or equal to a 1000 when added together.

//word1[i] and word2[i] consist of lowercase letters
//That means that they will never a case where we will have uppercase and values that is not a letter or letters.

var arrayStringsAreEqual = function(word1, word2) {
     return word1.join('') === word2.join('')
};
