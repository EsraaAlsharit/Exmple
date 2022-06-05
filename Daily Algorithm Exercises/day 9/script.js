/*
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature"
// const expected1 = "erutaerc"

const str2 = "dog"
// const expected2 = "god"

function reverseString(str) {
    // code here
    var newstr = "";
    for (let index = str.length - 1; index >= 0; index--) {
        newstr += str[index];

    }
    return newstr;
}
console.log(reverseString(str1));
console.log(reverseString(str2));
console.log()
/*****************************************************************************/

/*
    Acronyms
  
    Create a function that, given a string, returns the string’s acronym
    (first letter of each word capitalized).
  
    Do it with .split first if you need to, then try to do it without
  */

const str3 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";

const str4 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";

function acronymize(str) {
    // code here
    // var newstr = "";

    // if (str[0] != " ") {
    //     newstr += str[0];
    // }

    // for (let index = 0; index < str.length; index++) {

    //     if (str[index] == " ") {
    //         if (str.length == index + 1) {
    //             continue;
    //         }
    //         newstr += str[index + 1];
    //     }
    // }

    return newstr.toUpperCase();

    // var arr = str.split(" ");
    // var newstr = "";
    // for (let index = 0; index < arr.length; index++) {
    //     if (arr[index][0] != "") {
    //         newstr += arr[index][0];
    //     }
    // }
}

console.log(acronymize(str3));
console.log(acronymize(str4));
console.log()
/*****************************************************************************/

/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
//   const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
//   const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
//   const expected3 = false;

function caseInsensitiveStringCompare(strA, strB) {
    // code here
    return strA.toLowerCase() == strB.toLowerCase();
}

console.log(caseInsensitiveStringCompare(strA1, strB1))
console.log(caseInsensitiveStringCompare(strA2, strB2))
console.log(caseInsensitiveStringCompare(strA3, strB3))