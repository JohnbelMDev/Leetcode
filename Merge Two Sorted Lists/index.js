    //Taking parameter L1, and L2 will be linked lists of interger values
    //return the linked list sorted

  //example
      // l1 = {2,19,40}  <= first nodes inside the linked list
      // l2 = [1,2,6] <= second nodes inside the linked list
      // result = [1],{2},[2],[6],{19},{40}

   //l1 = [1,2], l2 = [] => [1,2]
   //l1 = [], l2 = [2,9] => [2,9]



//use concat to concanted l2 with l1 and store in concatAllValues => [2,19,40,1,2,6]
// sort concatAllValues
// if concatAllValues.length is empty
        //return []
// else
        //return concatAllValues


//
// var mergeTwoLists = function(l1, l2) {
//    // let concatAllValues = [...l1,...l2]
//   // let x = [...l1,...l2]
//   //  // console.log(x);
//    // console.log(concatAllValues)
// // concatAllValues.sort( (a,b) => a - b)
// //     if(concatAllValues.length === []){
// //         return []
// //     }
// //     else{
// //         return concatAllValues
// //     }
// let numl1;
// let concatAllValues = []
// let numl2
//     for (var i = 0; i < l1.length; i++) {
//       numl1 = l1[i]
//     concatAllValues.push(numl1)
//
//     }
//     for (var i = 0; i < l2.length; i++) {
//       numl2 = l2[i]
//       concatAllValues.push(numl2)
//     }
//     concatAllValues.sort( (a,b) => a - b)
//     if(concatAllValues.length === 0){
//       let empty = []
//            return empty
//        }
//        else{
//            return concatAllValues
//        }
//     // console.log(concatAllValues);
// };


var mergeTwoLists = function(l1, l2) {

    if( l1 == null) {
        console.log('l1 is null, returning l2: ', l2);
        return l2;
    }
    else if (l2 == null) {
        console.log('l2 is null, returning l1: ', l1);
        return l1;
    } else if ( l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        console.log('return l1: ', l1);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        // console.log('return l2: ', l2);
        return l2;
    }

};

console.log(mergeTwoLists([1,2,4],[1,3,4]));
