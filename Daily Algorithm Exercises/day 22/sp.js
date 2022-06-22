/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const us_dollar = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
}

const cents1 = 25
// const expected1 = { quarter: 1 }

const cents2 = 50
// const expected2 = { quarter: 2 }

const cents3 = 9
// const expected3 = { nickel: 1, penny: 4 }

const cents4 = 99
// const expected4 = { quarter: 3, dime: 2, penny: 4 }

function fewestCoinChange(cents) {
    // code here
    cents_dollar = {}
    while (cents != 0) {
        if (cents >= us_dollar["quarter"]) {
            cents -= us_dollar["quarter"]
            if (cents_dollar["quarter"] == undefined) {
                cents_dollar["quarter"] = 1
            }
            else {
                cents_dollar["quarter"] += 1
            }

        } else if (cents >= us_dollar["dime"]) {
            cents -= us_dollar["dime"]
            if (cents_dollar["dime"] == undefined) {
                cents_dollar["dime"] = 1
            }
            else {
                cents_dollar["dime"] += 1
            }

        } else if (cents >= us_dollar["nickel"]) {
            cents -= us_dollar["nickel"]
            if (cents_dollar["nickel"] == undefined) {
                cents_dollar["nickel"] = 1
            }
            else {
                cents_dollar["nickel"] += 1
            }

        } else if (cents >= us_dollar["penny"]) {
            cents -= us_dollar["penny"]
            if (cents_dollar["penny"] == undefined) {
                cents_dollar["penny"] = 1
            }
            else {
                cents_dollar["penny"] += 1
            }
        }
    }
    return cents_dollar

}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))

/* ******************************************************************************** */

/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

// const nums1 = [3, 0, 1];
// const expected1 = 2;

// const nums2 = [3, 0, 1, 2];
// const expected2 = null;
// Explanation: nothing is missing

/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

const nums3 = [2, -4, 0, -3, -2, 1];
// const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
// const expected4 = 6;

function missingValue(nums) {
    // code here
    nums.sort()
    // console.log(nums)
    var min = nums[0]
    var count = min
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] != count) {
            return count
        } else {
            count += 1
        }
    }

}
console.log(missingValue(nums3))
console.log(missingValue(nums4))