var findTheDifference = function(s, t) {

  // console.log(splitString);
  // array.pu
  let splitS = s.split('')
  let splitt = t.split('')
  // second.push(s.split(' '))
  // console.log(second);

        // comparing each element of array
        for(let i=0; i<splitt.length; i++) {

            if(splitt[i] != splitS[i]) {
                return splitt[i];
            }


        }

};

console.log(findTheDifference("ae","aea"));
