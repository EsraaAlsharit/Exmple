class Cards {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Effect extends Cards {
    constructor(name, cost, text, state, magnitude) {
        super(name, cost);
        this.text = text;
        this.state = state;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.state == "resilience") {
                target.res += this.magnitude;
            }
            else {
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Unit extends Cards {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power
        this.res = res
    }
    attack(target) {
        target.res -= this.power;
    }
}
//units
var redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
var blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
console.log(redBeltNinja)
console.log(blackBeltNinja)

console.log()
//effect
var hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
var unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
var pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);

hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja)
unhandledPromiseRejection.play(redBeltNinja);
console.log(redBeltNinja)
pairProgramming.play(redBeltNinja);
console.log(redBeltNinja)

redBeltNinja.attack(blackBeltNinja);

console.log()
console.log(redBeltNinja)
console.log(blackBeltNinja)