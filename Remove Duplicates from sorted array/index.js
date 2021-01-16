//I'm taking an array as my parameter remove the duplicates
// returning the new of the array that's not a duplicates but only return the length of the array length






var removeDuplicates = function(nums) {

   let removeDuplicateNumber = [...new Set(nums)]
   return removeDuplicateNumber
};


console.log(removeDuplicates([1,1,2]));
