//taking in a number
//number will be to check for multiplicity of that number
// example
// multiples of 3's output 'Fizz'
// multiples of 5's output  'Buzz'
// numbers that are multples of both numbers 3,5 => output => "fizzBuzz"

// create to loop as long as i is smaller than n
//create a condition that will check for multiples 3
//return 'Fizz'
//create if else condition that will check for multiples of 5
//return 'Buzz'
//create if else condition that will check for both numbers
//return 'fizzBuzz'



var fizzBuzz = function(n) {
  let fizzBuzzArray = []
  for (let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzArray.push('FizzBuzz')
    }
    else  if( i % 3 === 0){
      fizzBuzzArray.push('Fizz')
    }
    else if ( i % 5 === 0) {
      fizzBuzzArray.push('Buzz')
    }

    else {
      fizzBuzzArray.push(i.toString())
    }
  }
  return fizzBuzzArray
};
console.log(fizzBuzz(5));
