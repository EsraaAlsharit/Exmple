//Always Hungry

function alwaysHungry(arr) {
    // your code here 
    var flag = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == "food") {
            console.log("yummy");
            flag++;
        }
    }
    if (flag < 1) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
console.log("\n____________________________")
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log("**********************************************\n");

//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > cutoff) {
            filteredArr.push(arr[index]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


console.log("**********************************************");

//Better than average

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    sum = sum / arr.length;
    var count = 0
    for (let index = 0; index < arr.length; index++) {
        if (sum < arr[index]) {
            count++
        }

    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


console.log("**********************************************");

function reverse(arr) {
    // your code here
    arr.reverse();
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

console.log("**********************************************");

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let index = 2; index < n; index++) {
        fibArr[index] = fibArr[index - 1] + fibArr[index - 2];
    }
    // your code here
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
