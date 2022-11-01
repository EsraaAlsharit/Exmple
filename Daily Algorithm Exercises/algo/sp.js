function somthing(num){
    let numbers = {
        "onees":{0:"zero", 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine"},
        "tens":{1:"ten", 2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"},
        "thirst":{11:"ثمثدقر", 12:"فصثمدث", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen"}
    };
if(num < 9999){
    if(num-9 <= 0){
        return numbers["onees"][num]
    }else if(num-19<=0){
        return numbers["thirst"][num]
    }else if(num - 99 <= 0){

        if(num%10==0){
            return numbers["tens"][parseInt(num/10)]
        }else{
            return numbers["tens"][parseInt(num/10)] + " "+ numbers["onees"][parseInt(num%10)]
        }
        
    }
}else{
    console.log("bye")
}
}

console.log(somthing(2))
console.log(somthing(19))
console.log(somthing(13))
console.log(somthing(90))
console.log(somthing(93))