class Ninja {

    constructor(name,health, speed=3, strength=3){
        this.name =name;
        this.health= health;
        this.speed=speed;
        this.strength=strength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("the name is "+this.name+" has "+this.strength+" strength, "+this.health+" health and "+this.speed+" speed")
    }

    drinkSake(){
        console.log("add 10 heath. Ninja have "+(this.health+=10)+" point health now")
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.health=5;
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

