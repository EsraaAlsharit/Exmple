/*****************************************************************************/

/*
    Balance Point
    
    Write a function that returns whether the given
    array has a balance point BETWEEN indices,
    where one side’s sum is equal to the other’s.
*/

const nums1 = [1, 2, 3, 4, 10];
// const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
// const expected2 = false;

function balancePoint(nums) {
    Rsum = 0;
    Lsum = 0;
    Total = 0;
    val = false;
    for (var i = 0; i < nums.length; i++) {
        Total += nums[i];
    }
    for (var j = 0; j < nums.length; j++) {
        Rsum += nums[j];
        Lsum = Total - Rsum;
        if (Rsum == Lsum) {
            val = true;
        }
    }
    return val;
}

console.log(balancePoint(nums1))
console.log(balancePoint(nums2))