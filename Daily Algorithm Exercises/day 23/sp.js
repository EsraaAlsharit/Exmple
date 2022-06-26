// Recursion

// Base case(s)
// Forward movement

// return value or function call
// Call Stack
// Pass by value/reference

/* ******************************************************************************** */

/*
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3]
// const expected1 = 6

// add params if needed for recursion

function sumArr(nums, i = 0) {
    // code here
    if (i <= 0)
        return 0;
    return (sumArr(nums, i - 1) + nums[i - 1]);
}

console.log(sumArr(nums1, nums1.length))

/* ******************************************************************************** */

/*
        Recursive Sigma
        
        Input: integer
        Output: sum of integers from 1 to Input integer
        
        */

const num1 = 5
// const expected1 = 15
// // Explanation: (1+2+3+4+5)

const num2 = 2.5
// const expected2 = 3
// // Explanation: (1+2)

const num3 = -1
// const expected3 = 0

function recursiveSigma(n) {
    // code here
    n=Math.floor(n)
    if (n <= 0) {
        return 0
    }
    else { 
        return (n + recursiveSigma(n - 1))
    }
}
console.log()
console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))