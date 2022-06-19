// Theme: Arrays

/*
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 10];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const numstext = [-2, 5,1, 7, 0, 3,1];
const numstext1 = [10,5,9,1];
const numstext2 = [10,2,5,0,10];//problem if the 1st and last value equals
function balanceIndex(nums) {
    // var sumlift= nums[0], sumright=nums[nums.length-1]
    // if(nums.length!=2){
    //     for (let index = 1; index < nums.length;++index) {
            
    //         if(sumlift==sumright){
    //             return index
    //         }
    //         else if(sumlift<sumright){
    //             sumlift+=nums[index]
    //         }
    //         else if(sumlift>sumright){
    //             sumright+=nums[nums.length-index]
    //             // console.log()
    //         }           
            
    //     }
    // }
    // return -1
    // code here

    var sumlift= nums[0], sumright=nums[nums.length-1], index=1, indexright=nums.length-2
    if(nums.length!=2){
        while(index!=indexright){

           
            if(sumlift<sumright){
                sumlift+=nums[index]
                index++
            }
            if(sumlift>sumright){
                sumright+=nums[indexright]
                indexright++
            }
            if(sumlift==sumright){
                return index
            }           
        }
    }
    return -1

}
console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(numstext))
console.log(balanceIndex(numstext2))

/*****************************************************************************/

/*
      Balance Point
    
      Write a function that returns whether the given
      array has a balance point BETWEEN indices,
      where one side’s sum is equal to the other’s.
    */

// const nums3 = [1, 2, 3, 4, 10];
// //   const expected1 = true;
// //   Explanation: between indices 3 & 4

// const nums4 = [1, 2, 4, 2, 1];
// //   const expected2 = false;

// function balancePoint(nums) {
//     // code here
//     var sumlift= nums[0], sumright=nums[nums.length-1], index=1, indexright=nums.length-2
//     while(index!=indexright){

//         if(sumlift==sumright){
//             return true
//         }
//         if(sumlift<sumright){
//             sumlift+=nums[index]
//             index++
//         }
//         if(sumlift>sumright){
//             sumright+=nums[indexright]
//             indexright++
//         }           
//     }
//     return false

// }
// console.log(balancePoint(nums3))
// console.log(balancePoint(nums4))
