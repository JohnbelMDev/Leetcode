// taking a paramter of array that contain numbers
   // return the count or the numbers that have even numbers of digits
  // example
          //[1,2,33,2]  => 1
    //convert the values into strings
   //set count
   //loop through all of the values that are inside of the array
   //create a condition that will check the length of the values of the array
   // check value module 2 === to zero
  // return the count of the length that are even

var findNumbers = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++){
      let numToString = nums[i].toString()
      if (numToString.length % 2 === 0){
        count++
      }
    }
    return count;

};


console.log(findNumbers([555,901,482,1771]));
