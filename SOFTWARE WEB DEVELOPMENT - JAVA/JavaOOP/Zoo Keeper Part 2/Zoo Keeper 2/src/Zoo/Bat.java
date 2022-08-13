package Zoo;

public class Bat extends Mammal{
	
//	public int energyLevel;
//
//	public Bat() {
//		// TODO Auto-generated constructor stub
//		this.energyLevel = 300;
//	}
//	
	public void fly() {
        this.energyLevel -= 50;
        System.out.println("clicks clicks clicks clicks\n energy:" + this.energyLevel);
    }

    public void eatHumans() {
        this.energyLevel += 25;
        System.out.println("so- well\n energy:" + this.energyLevel);
    }

    public void attackTown() {
        this.energyLevel -= 100;
        System.out.println("town on fire fire!!\n energy:" + this.energyLevel);
    }

}
