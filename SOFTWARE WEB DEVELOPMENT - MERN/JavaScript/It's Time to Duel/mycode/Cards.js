class Cards {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Effect extends Cards {
    constructor() {
        super();
    }

}

class Unit extends Cards {
    constructor(power, res) {
        super();
        this.power = power
        this.res = res
    }

}