/*
    Array: Remove Duplicates
    Given a SORTED array of integers, dedupe the array
    Because array elements are already in order, all duplicate values will be grouped together.
    Ok to use a new array
    Bonus: do it in O(n) time (no nested loops, new array ok)
    Bonus: Do it in-place (no new array)
*/

const nums1 = [1, 1, 1, 1]
// const expected1 = [1]

const nums2 = [1, 1, 2, 2, 3, 3]
// const expected2 = [1, 2, 3]

const nums3 = [1, 1, 2, 3, 3, 4]
// const expected3 = [1, 2, 3, 4]

function removeDuplicates(nums) {
    var arr = [nums[0]]
    var tem = nums[0]

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != tem) {
            tem = nums[index]
            arr.push(nums[index])
        }

    }
    return arr
}
console.log(removeDuplicates(nums1))
console.log(removeDuplicates(nums2))
console.log(removeDuplicates(nums3))
/*****************************************************************************/

/*
    Array: Mode
    Create a function that, given an array of ints,
    returns the int that occurs most frequently in the array.
    What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
    - return empty array
*/

const nums4 = [];
// const expected1 = [];

const nums5 = [1];
// const expected2 = [1];

const nums6 = [5, 1, 4];
// const expected3 = [];

const nums7 = [5, 1, 4, 1];
// const expected4 = [1];

const nums8 = [5, 1, 4, 1, 5];
// const expected5 = [5, 1];
//  - order doesn't matter

const nums9 = [5, 1, 4, 1, 5, 4];
// const expected6 = [];

function mode(nums) {
    var arr = []
    var tem = nums[0], count1 = 0, count2 = 0
    if (nums.length == 1) {
        arr.push(nums[0])
    }
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == tem) {
            count1++
        } else if (nums[index] != tem && count1 > count2 || count1 == count2) {
            tem = nums[index]
            arr.push(nums[index - 1])
            count2 = count1
            count1 = 0
        }
    }
    return arr
}
console.log()
console.log(mode(nums4))
console.log(mode(nums5))
console.log(mode(nums6))
console.log(mode(nums7))
console.log(mode(nums8))
console.log(mode(nums9))