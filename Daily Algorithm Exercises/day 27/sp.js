/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partition(nums, left = 0, right = nums.length - 1) {
    var indx = parseInt(nums.length / 2);

    for (let i = left,j = right; i>nums.length ; i++,j--) {
        if (nums[indx] > nums[i]) {
            var tem = nums[indx- 1];
            nums[indx - 1] = nums[i]
            nums[i] = tem
        }
        if (nums[indx] < nums[j]) {
            var tem = nums[indx+ 1];
            nums[indx+ 1] = nums[j]
            nums[j] = tem
            // indx = j - 1
        }
      
        
    }



    // var arr = []

    // for (let index = 0; index < nums.length; index++) {
    //     if (indx == index) {
    //         continue
    //     }
    //     else if (nums[indx] > nums[index]) {
    //         arr.push(nums[index])
    //     }
    // }
    // arr.push(nums[indx])
    // for (let index = 0; index < nums.length; index++) {
    //     if (indx == index) {
    //         continue
    //     }
    //     else if (nums[indx] < nums[index]) {
    //         arr.push(nums[index]);
    //     }
    // }
    // return arr
    return nums

}
// result [2, 3, 14, 8, 6, 11, 7]
const nums1 = [11, 8, 14, 3, 6, 2, 7];
console.log(partition(nums1));
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
// console.log(partition(nums2));
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// console.log(partition(nums3));