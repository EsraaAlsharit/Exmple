/*
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

// const str1 = "Y(3(p)p(3)r)s"
// const expected1 = true

// const str2 = "N(0(p)3"
// const expected2 = false
// // Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k"
// const expected3 = false
// // Explanation: because the underlined ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c"
// const expected4 = false
// // Explanation: same number of opens and closes but the 2nd closing closes nothing

function parensValid(str) {
    // code here
}

/*****************************************************************************/

/*
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
// const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
// const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false;

function bracesValid(str) {
    arr = []
    for(var i=0; i<str.length;i++){
        if(str[i]=='('||str[i]=='{'||str[i]=='['){
            arr.push(str[i])
        }
        else if(str[i]==')'||str[i]=='}'||str[i]==']'){
            if(str[i]==')' && arr[arr.length-1]=='('){
                arr.pop()
            }
            else if(str[i]=='}' && arr[arr.length-1]=='{'){
                arr.pop()
            }
            else if(str[i]==']' && arr[arr.length-1]=='['){
                arr.pop()
            }
            else{
                return false
            }
        }
    }
    if (arr.length == 0){
        return true
    }
    return false
}
console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))



