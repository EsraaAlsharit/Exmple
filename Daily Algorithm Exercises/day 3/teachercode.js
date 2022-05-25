function prt(item){
    console.log(item)
}
/*
Given an array of integers
return the index where the smallest integer is located
return -1 if there is no smallest integer (array is empty)
since -1 is not a valid index, this indicates it couldn't be found
If the smallest integer occurs more than once, return the index of the first one.
*/
// num = 1 <- assignment
// num == 1 <- comparison

const nums1 = [5, 2, 3]
const expected1 = 1

const nums2 = [5, 7, 2, 3]
const expected2 = 2

const nums3 = []
const expected3 = -1

function indexOfMinVal(nums) {
    if(nums.length==0){
        return -1
    }
    let index = 0
    for(i=0; i<nums.length; i++){
        if (nums[i] < nums[index]){
            index = i;
        }
    }
    return index;
}

prt(indexOfMinVal(nums1))
prt(indexOfMinVal(nums2))
prt(indexOfMinVal(nums3))



/* ******************************************************************************** */

/*
Array: Second-Largest
Return the second-largest element of an array, or null if there is none.
Bonus: do it with one loop and no nested loops
*/

const nums4 = [5, 4, 1, 2]
const expected4 = 3

const nums5 = [3, 3]
const expected5 = null

const nums6 = [2]
const expected6 = null

const nums7 = []
const expected7 = null

function secondLargest(nums) {
    let largest = null
    let secondLargest = null
    for(i=0;i<nums.length;i++){
        if (nums[i]>largest){
            secondLargest = largest
            largest = nums[i]
        }
        if(nums[i] > secondLargest && nums[i] < largest){
            secondLargest = nums[i]
        }
        
    }
    return secondLargest;
}

prt(secondLargest(nums4))
prt(secondLargest(nums5))
prt(secondLargest(nums6))
prt(secondLargest(nums7))