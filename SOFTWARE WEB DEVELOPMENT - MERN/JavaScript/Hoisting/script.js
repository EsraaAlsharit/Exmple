// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// let example = "I'm the example!";
// console.log(example);
//1
// var hello = 'world';
// console.log(hello);
//2
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
//3
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);//not working

//4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     var food = 'gone';
//     console.log(food);
//     food = 'half-chicken';
//     console.log(food);
// }
//5
// console.log(food);
var mean = function () {
    var food = "fish";
    console.log(food);
    food = "chicken";
    console.log(food);
}
mean();
//console.log(food);//not working
//6
var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    var dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}









