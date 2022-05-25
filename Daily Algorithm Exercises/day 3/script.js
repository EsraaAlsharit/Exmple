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
//const expected1 = 1

const nums2 = [5, 7, 2, 3]
//const expected2 = 2

const nums3 = []
//const expected3 = -1

function indexOfMinVal(nums) {
    // code here
    var min = nums[0];
    var loc;

    if(nums.length != 0){
        for (let index = 0; index < nums.length; index++) {
            if(min> nums[index]){
                min = nums[index];
                loc= index;
            }
        }

        return loc;
        return "value "+min+ " in index "+loc;
        
    }else{
        return -1;
        return "array is empty";   
    }
    

}

console.log(indexOfMinVal(nums1));
console.log("*************************\n");
console.log(indexOfMinVal(nums2));
console.log("*************************\n");
console.log(indexOfMinVal(nums3));


/* ******************************************************************************** */

/*
Array: Second-Largest
Return the second-largest element of an array, or null if there is none.
Bonus: do it with one loop and no nested loops
*/

const nums4 = [2, 3, 1, 4]
//const expected4 = 3

const nums5 = [3, 3]
//const expected5 = null

const nums6 = [2]
//const expected6 = null

const nums7 = []
//const expected7 = null

const nums8 = [5, 3, 1, 4];

function secondLargest(nums) {
    // code here
    var max = null;
    var SecMax= null;
    var flag=0;
    if(nums.length != 0 && nums.length != 1){
        //find Largest
        for (let index = 0; index < nums.length; index++) {
            if(max< nums[index]){
                max = nums[index];
            }
            
        }
        //2nd Largest 
        for (let index = 0; index < nums.length; index++) {
            if(max== nums[index]){
                flag++;
            }
            if(max > nums[index] && nums[index]> SecMax ){
                SecMax= nums[index];
            }
        }

        if(flag>1){
        return null;
        }
        else{
            return SecMax;
        }
        
        
    }else{
        return 'null';
    }
}

console.log("====================================\n");
console.log(secondLargest(nums4));
console.log("*************************\n");
console.log(secondLargest(nums5));
console.log("*************************\n");
console.log(secondLargest(nums6));
console.log("*************************\n");
console.log(secondLargest(nums7));
console.log("*************************\n");
console.log(secondLargest(nums8));