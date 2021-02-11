// taking a string as my parameter
// return true or false to see if it's a palidrome or not
// racecar => racecar should return true

// compare original string with new string
// split the string, reverse the string, then join the string

var isPalindrome = function(s) {

  console.log(s.split(' ').reverse().join(' '));

return s === s.split('').reverse().join('')

};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
