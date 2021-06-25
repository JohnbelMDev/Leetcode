/**
 * @param {string} s
 * @return {number}
 */
 // Symbols for roman numerals and their number
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
 // params : Taking a roman numeral
 // return value: Return as an integer
 // example
      //  I => 1
      // III => 3
      // "IV" => 4

  // create an object to store the value of the Roman Numeral
  //Romanobject = {
          // I:1,
          // V:5,
          // X:10,
          // L:50,
          // C:100,
          // M: 100
    //}

    /**
     * @param {string} s
     * @return {number}
     */
    // example of paramater
      // s = xxi

      // s = vi
      // s = vviv
    function romanCharacterToInt(c){
        if(c === "I"){
           return 1;
        }
        else if(c === "V"){
            return 5
        }
        else if( c === 'X'){
            return 10;
        }
        else if (c === "L"){
            return 50;
        }
        else if (c === "C"){
            return 100;
        }
        else if (c === "D"){
            return 500;
        }
        else if(c === "M"){
           return 1000
        }
    }
    var romanToInt = function(s) {

    let sum = 0 ;
        for(let z = 0; z < s.length; z++){
            sum+=romanCharacterToInt([s[z]]) // 10 + 50 = 60
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
        }
       return sum;
    };
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
    }
   return sum;
};

console.log(romanToInt("IV"));
console.log(romanToInt("XL"));
console.log(romanToInt("XLVI"));
console.log(romanToInt("LIV"));
console.log(romanToInt("LXXIV"));
