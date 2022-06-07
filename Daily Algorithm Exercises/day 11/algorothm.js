/*
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears.
If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */

const str1 = "aaaabbcddd"
// const expected1 = "a4b2c1d3"

const str2 = ""
// const expected2 = ""

const str3 = "a"
// const expected3 = "a"

const str4 = "bbcc"  // b2c2  -> length is both 4
// const expected4 = "bbcc"

function encodeStr(str) {
    // your code
    var newstr = ""

    for (let index = 0; index < str.length; index++) {

        if (str[index + 1] == str[index] && index + 1 != str.length) {
            newstr += str[index]
            let count = 1
            for (let j = index; j < str.length; j++) {
                if (str[j + 1] == str[j] && j + 1 != str.length) {
                    count++
                }
                else {
                    index = j
                    break
                }
            }
            newstr += count
        } else {

            newstr += str[index]
        }

    }

    if (str.length == newstr.length) {
        return str;
    } else {
        return newstr;
    }
}
console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))

/*****************************************************************************/

/*
    String Decode
    Given a string, create a function that repeats each letter by the number that follows
    */

const str5 = "a3b2c1d3";
// const expected1 = "aaabbcddd";

function decodeStr(str) {
    // code here
    var newstr = ""
    for (let index = 0; index < str.length; index++) {
        if (str[index]=="[a-zA-Z]+") {
            newstr+=str[index]
        }
        else{
            for (let i = parseInt(str[index]); i > 0 ; i--) {
                newstr+=str[index-1]
            }
        }
    }
    return newstr
}

console.log(decodeStr(str5))