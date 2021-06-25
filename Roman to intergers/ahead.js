var romanToInt = function(s) {
    let romanObject = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
let sum = 0 ;
    for(let z = 0; z < s.length; z++){
        sum+=romanObject[s[z]] // 10 + 50 = 60
        //100 + 500 = 600
      if(s[z] === 'V'){
          if(s[z-1] === 'I'){
              sum = sum - 2
          }
      }
        else if(s[z] === "X"){
            if(s[z-1] === 'I'){
                sum = sum - 2
            }
        }
        else if (s[z] === 'L'){
            if(s[z-1] === 'X'){
                sum = sum - 20
            }
        }
        else if (s[z] === 'C'){
            if(s[z-1] === 'X'){
                sum = sum - 20
            }
        }
        else if (s[z] === 'D'){
            if(s[z-1] === 'C'){
                sum = sum - 200
            }
        }
        else if (s[z] === 'M'){
            if(s[z-1] === 'C'){
                sum = sum - 200
            }
        }
    }
   return sum;
};
