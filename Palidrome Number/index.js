var isPalindrome = function(x) {
   let reverse =  x.toString().split('').reverse().join('');

    if(reverse == x ){

      return true;
    }
    else{
        return false;
    }


};
console.log(isPalindrome([921]));
