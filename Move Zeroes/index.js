/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//taking in array of intengers
//returning the array ordered from lowest to highest
   //example
        //[3,0,1,19] => [1,3,19,0]

var moveZeroes = function(arr) {

// console.log(array);

var i = 0;
let temp = []
 while (i < arr.length) {
   if (arr[i] === 0) {
     temp.push(arr[i])
     // arr.push(temp[])
     // console.log(temp);
     // console.log(i);
     arr.splice(i, 1);

   } else {
     i++;
   }
 }
 // console.log(// TEMP: );
 console.log(temp);
 for (var i = 0; i < temp.length; i++) {
   arr.push(temp[i])
 }
 return arr;

};

console.log(moveZeroes([0,1,0,3,12]));
