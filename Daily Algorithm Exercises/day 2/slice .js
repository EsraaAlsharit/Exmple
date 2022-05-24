/*
Recreate the pop method without using .pop()
Remove and return the last item from a given array
After removing an item from an array, what else changes?
*/
// const arr1 = [1, 2, 3]
// const expected1 = 3
// const expectedArr1 = [1, 2]

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3, 4, 5, 6]

function pop(arr) {
// code here
    return arr.slice (0,-1);
}

// [] run these below:
console.log(pop(arr1));
console.log(pop(arr2));