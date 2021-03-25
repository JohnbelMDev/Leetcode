// taking in array
//return true if there's any duplicates

//using new set to take out duplicates
//check if eveything that inside original match with set

var containsDuplicate = function(nums) {
  let unique = [...new Set(nums)]
  if (nums.length === unique.length) { 
    return false
  }
  else {
    return true
  }

};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
