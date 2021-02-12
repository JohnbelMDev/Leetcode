// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


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
