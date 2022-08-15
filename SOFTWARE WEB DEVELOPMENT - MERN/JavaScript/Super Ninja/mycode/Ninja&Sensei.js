class Ninja {

    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("the name is " + this.name + " has " + this.strength + " strength, " + this.health + " health and " + this.speed + " speed")
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {

    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name,health,speed,strength);
        this.wisdom;
    }

    speakWisdom() {
        super.drinkSake();
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();

superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

