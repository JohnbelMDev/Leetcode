// I'll be taking an array as my parameter
// return the last value added by one with the whole array
//example
      // [2,1,3]  ==> [2,1,4]

  // use slice to get last indexe
  // add 1 to the last
  // join the whole array once added

var plusOne = function(digits) {
  let lastindex = digits[digits.length -1]
  let addedone = lastindex + 1
  let intenger = []
    if (digits.length === 1 && digits[0] >= 9) {
 digits[digits.length -1] = addedone
 // digits.toString()
 digits = digits.toString()
 digits = digits.split('')
 intenger = digits.map(Number)
  return intenger

    }
else {
   digits[digits.length -1] = addedone
}
     return digits
};
console.log(plusOne([9,9]));
