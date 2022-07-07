// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

function printarr(arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
    console.log("================================");
}

printarr(arr1)
printarr(arr2)
printarr(arr3)
console.log("***********************************************************");

function sum(arr) {
    var sumnum = 0, sumindx = 0;
    for (let index = 0; index < arr.length; index++) {
        sumnum += arr[index];
        sumindx += index;
    }
    console.log("sum arr " + sumnum + " sum index " + sumindx);
}

sum(arr1)
sum(arr2)
sum(arr3)

console.log("***********************************************************");
function graterthan5(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 5) {
            console.log(arr[index]);
        }else{
            arr[index]="No dice";
        }
    }
    console.log("================================");
}

graterthan5(arr1)
graterthan5(arr2)
graterthan5(arr3)

