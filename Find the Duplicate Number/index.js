/**
 * @param {number[]} nums
 * @return {number}
 */
      //taking an array of numbers that contain duplicates
      // return the number that appears more than once

      //example
            //[19,2,1,3,1] =>

    //create a varible call unique and assing to the new set(nums)
    //create a counter varible to keep track of amount of numbers that are seen
    //create a newarray variable and set it to an empty array
        //create a loop to loop through unique
                //reset count to zero
            //create an inner loop to loop through the nums
                //create to check if unique values match with array values
                    //count++
                        //create a condition that check if count is equal to 2
                            //push the value inside the newArray
        //return newarray

var findDuplicate = function(nums) {
    let unique = [...new Set(nums)]
    let count = 0;
    let newArray = []

        for( let i = 0; i < unique.length; i++){
            count = 0;
               for(let j = 0; j < nums.length; j++){
                   if(unique[i] == nums[j]){
                       count++
                       if(count == 2){
                           newArray.push(nums[j])
                       }
                   }
               }
        }
    return newArray
};
