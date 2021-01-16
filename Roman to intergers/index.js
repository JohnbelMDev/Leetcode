var romanToInt = function(s) {
  let romanObject = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000

  }
  for (const property in romanObject) {
    // console.log(property,romanObject[property]);
    if (property === "I") {
      console.log(romanObject[property]);
    } else if (property === 'V') {
      console.log(romanObject[property]);

    } else if (property === 'X') {
      console.log(romanObject[property]);

    } else if (property === 'L') {
      console.log(romanObject[property]);

    } else if (property === 'C') {
      console.log(romanObject[property]);

    } else if (property === 'D') {
      console.log(romanObject[property]);

    } else if (property === 'M') {
      console.log(romanObject[property]);

    }

  }

};

console.log(romanToInt());
