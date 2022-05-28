// let tall = 62;

// if (tall > 52) {
//     console.log("Get on that ride, kiddo!");
// } else {
//     console.log("Sorry kiddo. Maybe next year.");
// }

//with insert

const readline = require('readline');

const inquirer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inquirer.question("How old are you?", age => {
    if (age > 52) {
        console.log("Get on that ride, kiddo!");
    } else {
        console.log("Sorry kiddo. Maybe next year.");
    }
    //    console.log(`${name} is ${age} years old`);
    inquirer.close();
    process.exit(0);
});

// inquirer.on("close", function() {
//     console.log("Good bye!");
//
// });


