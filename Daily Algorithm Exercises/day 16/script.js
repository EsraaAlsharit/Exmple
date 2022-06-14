const str1 = "Y(3(p)p(3)r)s"
// const expected1 = true

const str2 = "N(0(p)3"
// const expected2 = false
// // Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"
// const expected3 = false
// // Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c)))))))))"
// const expected4 = false
// // Explanation: same number of opens and closes but the 2nd closing closes nothing

function parensValid(str) {
    var arr =[]
    var res = true
    for(var i=0;i<str.length;i++){
        if (str[i] == '('){
            arr.push(str[i])
        }
        else if(str[i] ==')'){
            if (arr.length==0){
                return false
            }
            arr.pop()
        }
    }
    if(arr.length==0){
        res=true
    }
    else
        res= false
    return res
}

    console.log(parensValid(str1))
    console.log(parensValid(str2))
    console.log(parensValid(str3))
    console.log(parensValid(str4))