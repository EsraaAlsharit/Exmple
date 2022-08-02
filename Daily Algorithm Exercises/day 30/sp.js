/*
  Given two strings,
  return true if the first string can be built from the letters in the 2nd string
  Ignore case
  .indexOf will only tell you if the letter is found one time // not true: The indexOf() method returns the position of the first occurrence of a specified value in a string
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
// const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
// const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
// const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
// const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
// const expected5 = false;
// Explanation: not strB5 does not have enough "l" chars.

function canBuildS1FromS2(s1, s2) {
    // code here
    var count = 0;
    var flag = true
    var arr = [];

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i].toLowerCase() == s2[j].toLowerCase()) {
                for (let index = 0; index < arr.length; index++) {
                    //&& !(arr.includes(j))
                    if (arr[j] == j) {
                        flag = false
                    }

                }
                if (flag) {
                    arr.push(j)
                    count++;
                    flag = true
                    break
                }

            }
        }
    }
    // console.log(arr);
    if (count == s1.length) {
        console.log("true");
    } else {
        console.log("false");
    }



}
canBuildS1FromS2(strA1, strB1)
canBuildS1FromS2(strA2, strB2)
canBuildS1FromS2(strA3, strB3)
canBuildS1FromS2(strA4, strB4)
canBuildS1FromS2(strA5, strB5)


/*****************************************************************************/

/*
  Given a string, find the length of the longest substring without repeating characters.
*/
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3.
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

function lengthOfLongestSubString(str) {
    //   code here
    var arr=[]
    var txt=""
    for (let index = 0; index < str.length; index++) {

        if (!arr.includes(index)) {
            arr.push(str[index])
            txt+=str[index]
        } else {
            
        }

    }

    console.log("/n"+arr)
}

lengthOfLongestSubString(str1)
lengthOfLongestSubString(str2)
lengthOfLongestSubString(str3)
lengthOfLongestSubString(str4)