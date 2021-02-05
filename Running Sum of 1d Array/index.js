/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Taking an array of intengers as my parameter
// returning an array of numbers adding by the leading count

// example
        //[5,2] =>[5,7] => 5, 5 + 2 = 7
        //[6,2,3] => [6,8,11]

        // [5] => [5]
        //loop through the array


// [6,2,3] => [6,8,11]
//  6,2,3 =>

var runningSum = function(nums) {
  let total =0;
  let answer = []
    for (let i = 0; i < nums.length; i++){
      total += nums[i]
      answer.push(total)
      // [6,8,11]
    }
    return answer
    // console.log(total);
};
