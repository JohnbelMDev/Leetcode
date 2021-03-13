/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

    //taken an array and a target
    // return the indices of the two numbers that adds up to target

      //[2,3,4,5],7
      //[0,3]

   //create empty array call indices
   // for(let i = 0; ; i < nums.length; i++)
            //for(let j = i + 1; j < nums.length; j++)
                    //if(num[i] + num[j] === target)
                        //indices.push(i,j)
                            //return indices
var twoSum = function(nums, target) {

        let indices = []
            for(let i = 0; i < nums.length; i++){
                for (let j = i + 1; j < nums.length; j++){
                    if (nums[i] + nums[j] === target){
                        indices.push(i,j) //[0,3]
                        return indices;
                    }
                }
            }
};
