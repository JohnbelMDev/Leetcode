// taking an array as my parameter
// return the amount of numbers shown

// example
    //[1,3,2,4,2,1,1] => 1,1,1 => 2,2
    // because 1 shown the most amount of times

// create a count variable to check the amount of times a number
// create a for loop
    //create a count that compare the next values to the next
    // return count

    var majorityElement = function(nums) {
        const hash = {}

        for (let n of nums){
            if (!hash[n]){
                hash[n] = 0;
            }
            hash[n]++;


            if (hash[n]>nums.length/2){
                return n
            }
        }
    };

console.log(majorityElement([2,2,3,3,3,3,2]));
console.log(majorityElement([10,9,9,9,10]));
