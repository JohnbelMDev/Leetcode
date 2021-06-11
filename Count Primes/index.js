/**
 * @param {number} n
 * @return {number}
 */

// create a function that check if is prime
// check to see if number is divisible by itself

var countPrimes = function(n) {

};

// example
   // 2
   // 2/2 only 2
   // 3 / 3 = 1
  // 4/2 = 2
//
/**
 * @param {number} n
 * @return {number}
 */

// create a function that check if is prime
// check to see if number is divisible by itself
// https://stackoverflow.com/questions/15471291/sieve-of-eratosthenes-algorithm-in-javascript-running-endless-for-large-number/15471749#15471749
var countPrimes = function(n) {
    let count = 0;
    for(let i = 2; i < n; i++){
    //  check if it's true
        if(isPrime(i)){
            count++
        }
    }
    return count

};

// example
   // 2
   // 2/2 only 2
   // 3 / 3 = 1
  // 4/2 = 2
//10
function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if( num % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(7));  //true
console.log(isPrime(4)); //false
console.log(isPrime(15)); //false
console.log(isPrime(11)); //true
