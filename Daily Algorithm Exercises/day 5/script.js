/*
Array: Concat
.push allowed: arrName.push(newItem)
Replicate JavaScript’s concat() which combines two arrays into one NEW array
Input: two arrays
Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"]
const arrB1 = [1, 2, 3]
// const expected1 = ["a", "b", 1, 2, 3]

// const arrA2 = [1, 2, 3]
// const arrB2 = ["a", "b"]
// const expected2 = [1, 2, 3, "a", "b"]

function concat(arr1, arr2) {
    // your code here
    //can't do that
    // var Newarr;
    // Newarr = arr1.concat(arr2);
    // return Newarr;

    // my sol
    // var Newarr = [];
    // for (let index = 0; index < arr1.length; index++) {
    //     Newarr.push(arr1[index]);
    // }
    // for (let index = 0; index < arr2.length; index++) {
    //     Newarr.push(arr2[index]);
    // }
    // return Newarr;

    //team 3 or 4
    // for (let index = 0; index < arr2.length; index++) {
    //     arr1.push(arr2[index]);
    // }
    
    // return arr1;
    
    //var result = [...arr1, ...arr2];

    //alreem sol
    var Newarr = [];
    Newarr=arr1.s;
    for (let index = 0; index < arr2.length; index++) {
        Newarr.push(arr2[index]);
    }
    return Newarr;

}

// const arrA1 = ["a", "b"]
// const arrB1 = [1, 2, 3]
console.log(concat(arrA1, arrB1));


/* ******************************************************************************** */
// Interview 2020!!
/*
Given one array,
return a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
// const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
// const expected2 = ["a", "a"];

const arr3 = [];
// const expected3 = [];

function concatArrWithSelf(arr) {
    // your code here
    var Newarr = [];
    for (let index = 0; index < arr.length*2; index ++) {
        if (index >= arr.length) {
            Newarr.push(arr[index-arr.length]);
        }
        else{
            Newarr.push(arr[index]);    
        }
    }
    return Newarr;
}

console.log(concatArrWithSelf(arr1));
console.log(concatArrWithSelf(arr2));
console.log(concatArrWithSelf(arr3));
const arrA3 = ["a", "b"];
console.log(concatArrWithSelf(arrA3));


// mohmaed sol
//function concatArrWithSelf(arr) {
//    // your code here
//    // arr.push(arr);
// 
//    var temp = [];
//
//    for (let index = 0; index < arr.length*2; index++) {
//        temp.push(arr[index%arr.length]);
//
//
//    }
//    // console.log(arr);
//    return temp;
//}
//  const arrA3 =["a", "b", "c", "d", "e", "g"];
//  console.log(concatArrWithSelf(arrA3))