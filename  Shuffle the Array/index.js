/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

//  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
var shuffle = function(nums, n) {
const half = nums.length / 2;
let answer = []
const firstHalf = nums.splice(0, half)
const secondHalf = nums.splice(0,half)
   for (let i = 0; i < firstHalf.length; i++) {
     for (let z = 0; z < secondHalf.length; z++) {
       if (i === z) {
           answer.push(firstHalf[i],secondHalf[z])
       }
     }
   }
   return answer

};

console.log(shuffle([2,5,1,3,4,7]));
