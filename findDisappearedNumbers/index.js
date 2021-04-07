/**
 * @param {number[]} nums
 * @return {number[]}
 */
//taking n => n is represent the length of the array
//example
     //n = 8

   //[5,6]

//exmaple 2
       //the first part for example of 2 would be
        //range would start from the lowest number which is 1 and would go up based on the                     //nums array length
        // the range would be  range = [1,2]

//remove all the element inside nums that appears in range

//example 1
        //nums = [4,3,2,7,8,2,3,1]
        //n would the length of nums n = 8
        // range would be [1,8]
        //range 1,2,3,4,5,6,7,8
        //remove everything from range that appears in nums
        //[4,3,2,7,8,2,3,1] = remove Range = [5,6]

//create an empty call range
//loop trough as long as  i is smaller or equal to nums length
   //push i into range
       //create a condition that checks if in range is in nums
                    //remove from range

//return range









var findDisappearedNumbers = function(nums) {
   let range = []
    let rangeLoop = nums
      for(let i = 0; i < rangeLoop.length; i++){ //[3]
          range.push(i + 1)
            for(let j = 0; j < nums.length; j++){ //[4,3,2,7,8,2,3,1]
                  const indexOfFinalElement = range.length - 1;
                if(range[range.length - 1] === nums[j]){ //[1] === [4,3,2,7,8,2,3,1]
                    range.splice(indexOfFinalElement,1)// [1]
                    break;
                }
            }
      }
   // console.log('range',range)
    return range
};
