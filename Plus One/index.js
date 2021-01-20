// I'll be taking an array as my parameter
// return the last value added by one with the whole array
//example
// [2,1,3]  ==> [2,1,4]

// use slice to get last indexe
// add 1 to the last
// join the whole array once added

var plusOne = function(digits) {

  //check if last digit is a 10  <--- [8,7,9] --> [8,8,0] --- [9,9]
  // [1, 0, 0]
  //[9, 9]
  //[9,0]
  //[1, 0, 0]  ---->  [9,9] ---> [9,0] --->[1,0,0]
  // check if last digit
  // make a 1
  // then add another element to the array at the end
  // which is equal to 0
  //break
  //else {
  //make it a 0
  // check == < 9 --> increment by 1 and you're addedone
  // digits[digits.length -1] = addedone
  // console.log(addedone);
  // return digits
  //[8, 9, 9]
  //[9, 9] --> [1, 0, 0]
  //[9, 9, 9]
  for(let i = digits.length -1; i >= 0; i--){
    if(digits[i] == 9){
      //#1
      //[9, 0]
      //#2
      //[0, 0]
      digits[i] = 0
      console.log("digits increment",digits);


    }else{

      digits[i]+=1
      // console.log("digits increment",digits);

      return digits

    }


  }


// [9, 9, 9]  -->
//[0, 0, 0]
if(digits[0] === 0){
  console.log("digits",digits);
  digits.unshift(1)
}
  return digits
//[1, 0, 0, 0]




};
console.log(plusOne([9, 9]));
