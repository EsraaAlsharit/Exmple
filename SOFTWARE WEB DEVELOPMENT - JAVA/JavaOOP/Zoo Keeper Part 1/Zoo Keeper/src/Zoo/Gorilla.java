package Zoo;

public class Gorilla extends Mammal {

    public void throwSomething() {
        this.energyLevel -= 5;
        System.out.println("the gorilla has thrown something\n energy:" + this.energyLevel);
    }

    public void eatBananas() {
        this.energyLevel += 10;
        System.out.println("the gorilla's satisfaction\n energy:" + this.energyLevel);
    }

    public void climb() {
        this.energyLevel -= 10;
        System.out.println("the gorilla has climbed a tree \n energy:" + this.energyLevel);
    }
}
