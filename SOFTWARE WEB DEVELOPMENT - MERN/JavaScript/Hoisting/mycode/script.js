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
/*
console.log(hello);
var hello = 'world';
*/
//undefined

//2
/*
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
*/
// haystack first than magnet

//3
/*
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
*/
// 'super cool' only we did't call the function

//4
/*
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
*/

// 'chicken' then 'half-chicken'

//5
/* mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
*/
//throw error it is not function it is value having function which need to defined
//in line 56
//mean();

//6
/*
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
*/
//undefined
//rock
//r&b
// disco

//7
/*
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
*/
//san jose
//seattle
//burbank
//san jose

// 8 - Bonus ES6: const
/*
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
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
*/
// because const need to be var to change values




