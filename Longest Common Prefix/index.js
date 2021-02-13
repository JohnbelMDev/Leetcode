
// take an array
// the value of the array will be more than one
// returning the longest prefix in the array
// if there is no prefix then return an empty string
// Input: strs = ["flower","flow","flight"]
// Output: "fl"


var longestCommonPrefix = function(strs) {
  let prefix = '';
   if(strs.length === 0) return ""
  for (var i = 0; i < strs[0].length; i++) {
    // console.log(strs[0].length);
    const char = strs[0][i]
    for (var j = 0; j < strs.length; j++) {
     if(strs[j][i] !== char)
     {    console.log('j',strs[j][i]);

       // console.log(prefix);
       return prefix
     }
     console.log('lj',strs[j][i]);
    }
    prefix = prefix + char
  }
  // return prefix
};

console.log(longestCommonPrefix(["heghl","hell"]));
