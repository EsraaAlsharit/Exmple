//Print_odds() all of the odd values from 1 up to 20
console.log("\nAll of the odd values from 1 up to 20\n");
function Print_odds() {
    for (let index = 0; index <= 20; index++) {
        if (index % 2 != 0) {
            console.log(index);
        }
    }

}

Print_odds();

//Decreasing Multiples of 3
console.log("\nDecreasing Multiples of 3\n");

function Multiples() {
    for (let index = 100; index >= 3; index--) {
        if (index % 3 == 0) {
            console.log(index);
        }
    }
}

Multiples();

//Print the sequence
console.log("sequence\n");

function sequence() {
    var arr = [];
    for (var i = 4; i > -4; i -= 1.5) {
        arr.push(i);
    }
    console.log(arr);
}
sequence();


console.log("\nSigma\n");
//Sigma
function Sigma() {
    var sum = 0;
    for (let index = 1; index <= 100; index++) {
        sum += index;
    }
    console.log(sum);
}
Sigma();
//Factorial
console.log("\nFactorial\n");

function Factorial() {
    var product = 1;
    for (let index = 2; index <= 12; index++) {
        product *= index;
    }
    console.log(product);
}

Factorial();