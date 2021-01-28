var removeElement = function(nums, val) {
  let newArray = []
  const index = nums.indexOf(val);
  nums = nums.filter((item) => item !== val)
  return [nums]

};

console.log(removeElement([3,2,2,3],3));
