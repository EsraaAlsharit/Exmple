// Theme: Strings & Objects

/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"]
// const expected1 = {
//   a: 3,
// }

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// }

// const arr3 = []
// const expected3 = {}

function frequencyTableBuilder(arr) {
    // code here
    dict = {}
    for (let index = 0; index < arr.length; index++) {
        // if (dict[arr[index]] !== undefined ) {
        // if (dict.hasOwnProperty(arr[index]) ) {
        // if(dict[arr[index]]){
        if (arr[index] in dict) {
            dict[arr[index]]++
        }
        else {
            dict[arr[index]] = 1
        }
    }
    console.log(dict)
    // return dict
}
console.log(
    frequencyTableBuilder(arr1)
)
frequencyTableBuilder(arr2)


/*****************************************************************************/

/*
    Reverse Word Order
  
    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
  */

const str1 = "This is a test";
// const expected1 = "test a is This";

function reverseString(str) {
    // code here
    arr = str.split(" ")
    // arr = str.split(" ").reverse().join(" ")
    revStr = ""
    for (let index = arr.length - 1; index > -1; index--) {
        revStr += arr[index] + " "
    }

    return revStr;
}
console.log(reverseString(str1))

// alreem sol
function reverseString(str) {
    var arr = []
    var subStr = ""
    var newStr = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            arr.push(subStr)
            subStr = ""
        }
        else {
            subStr += str[i]
        }
    }
    arr.push(subStr)
    console.log(arr)
    for (var i = arr.length - 1; i > 0; i--) {
        newStr += arr[i]
        newStr += " "
    }
    newStr += arr[0]
    return newStr
}
console.log(reverseString(str1))