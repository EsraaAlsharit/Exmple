function encodeStr(str) {
    var string = ""
    var counter = 0
    for (var i=0; i<str.length; i++){
        if(str[i]==str[i+1]){
            counter++
        }
        else{
            counter++
            string+=str[i]+counter
            counter=0
        }
    }
    if(str.length <= string.length){
        return str
    }
    return string
}

function decodeStr(str) {
    var string = ""
    for (var i=0; i<str.length; i++){
        const num = Number(str[i]);
        if(Number.isInteger(num)){
            for(var j=0; j<str[i]; j++){
                string+=str[i-1]
            }
        }
    }
    return string
}