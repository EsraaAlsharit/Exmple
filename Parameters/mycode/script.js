function greet(name) {
    if (name == "Count Dooku") {
        return "I'm coming for you, Dooku!";
    }
    return "Good day, " + name + "!";
}
var greeting = greet("Anakin");
console.log(greeting);
var greeting = greet("Count Dooku");
console.log(greeting);