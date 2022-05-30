/*
Given an array, reverse it's items in place
return the array after reversing it
Do it in place without using any built in methods
*/

// const arr1 = [1, 2, 3]
// const expected1 = [3, 2, 1]

// const arr2 = ["a", "b"]
// const expected2 = ["b", "a"]

// const arr3 = ["a"]
// const expected3 = ["a"]

// const arr4 = []
// const expected4 = []

function reverseArr(arr) {
    // code here
    var tem;
    if (arr.length == 0) {
        return arr;
    }
    // }else{
    // for (let i = 0; i < arr.length / 2; i++) {
    //     tem = arr[i];
    //     arr[i] = arr[arr.length - i - 1];
    //     arr[arr.length - i - 1] = tem;
    // }}
    else if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length / 2; i++) {
            tem = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = tem;
        }
        return arr;
    } else {
        for (let i = 0; i < (arr.length - 1) / 2; i++) {
            tem = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = tem;
        }
        return arr;
    }
}

console.log(reverseArr([1, 2, 3]))
console.log(reverseArr([1, 2, 3, 4, 5, 6]))
console.log(reverseArr([]))






// reverseArr([1, 2, 3, 4, 5])