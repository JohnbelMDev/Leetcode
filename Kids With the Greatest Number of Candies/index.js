// Taking an array with the name candies, and a second parameter call extraCandies
//  candies [i] represent the values inside candies
//
//   Example
//    [2,3,5,1,3] => 5 is the greatest, 3
//
// [3,2=>5, 3+3=>6, 5+3=>7,1+3=>4,3+3=>6]
//
// Let i < candies
//         add everything inside the array which will become [5,6,8,4,3]
//         Check for the lowest number
// 	        Compare the lowest number with every other numbers
            //inside the array and if it’s    not greater then return true

function kidsWithCandies(candies,extraCandies){
  // order of n
  const maxCandies = Math.max(...candies); //17,4 => [12,17,2,13],4
  const answer = maxCandies - extraCandies;
  let newArray = []
    for(let i = 0; i <= candies.length-1; i++){
 //=> [12,17,2,13] =>[16,21,6,7]
      // newArray.push(candies[i] + extraCandies  >= maxCandies); //[16,21,6,7]=> [false,true,false,false]
    newArray.push(candies[i] >= answer) //12 >= 13 [false,true,false,false]
    }
return newArray

}
console.log(kidsWithCandies([4,2,1,1,2],1));
