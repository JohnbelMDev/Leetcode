var isPalindrome = function(x) {
   let reverse =  x.toString().split('').reverse().join('');

    if(reverse == x ){

      return true;
    }
    else{
        return false;
    }


};
console.log(isPalindrome("racecar"));
// ------------------------------------------------------------------------------
// Other expamples
// paramter that is being passed 
let number = 9799;
let numberToString = number.toString();
console.log(isPalindrome(numberToString));


function isPalindrome (x){
      let reserveWord = x.toString().split("").reverse().join("");
    //passing numbertoSring and this won't work becasue its not defined in this scope
    if (numberToString == reserveWord){
        return true;
    }else{
        return false;
    }

     console.log("The word being passed in is: " + x + " and the reversed word is: " + reserveWord);
  return x;
    }