/*
    Given an array and an index,
    remove the item at that index.
    return the removed item
    No built-in array methods except pop().
*/

const arr1 = ["a", "b", "c"];
const removeIdx1 = 1

const arr2 = ["a", "b", "c"];
const removeIdx2 = 3
// const expected2 = null
// const arr2Expected = ["a", "b", "c"]

const arr3 = ["a", "b", "c"]
const removeIdx3 = -3
// const expected3 = null
// const arr3Expected = ["a", "b", "c"]

function removeAt(arr, idx) {
    // your code here
    if (arr.length <= idx || -arr.length >= idx) {
        return null;
    } else {
        let tem;
        for (let index = idx; index < arr.length; index++) {
            //const element = arr[index];
            if (index + 1 < arr.length) {
                tem = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = tem;
            }
        }
        return arr.pop();
    }
}


var returnedValue = removeAt(arr1, removeIdx1);

const expected1 = "b"
console.log(returnedValue === expected1) // true
console.log(arr1)
// const arr1Expected = ["a", "c"]
//*****************
var returnedValue = removeAt(arr2, removeIdx2);

const expected2 = null;
console.log(returnedValue === expected2) // true
console.log(arr2)
/* ******************************* */
returnedValue = removeAt(arr3, removeIdx3);

const expected3 = null;
console.log(returnedValue === expected3) // true
console.log(arr3)


/* ******************************************************************************** */

/*
    Given an array, move the minimum value to the front
    return the array after done
    
    No built in methods
    */

const nums1 = [4, 5, 2, 9];
// const expected1 = [2, 4, 5, 9];

const nums2 = [5, 1, 0, 2, 3, 0];
// const expected2 = [0, 5, 1, 2, 3, 0];

function minToFront(nums) {
    // your code here
    let minNum = nums[0];
    let minIdx = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] < minNum) {
            minNum = nums[index]
            minIdx = index;
        }
    }//find min

    let tem;
    for (let index = 0; index < nums.length; index++) {

    }
    console.log(minNum + "" + minIdx);
    console.log(nums);
    return
}


minToFront(nums1);
minToFront(nums2);