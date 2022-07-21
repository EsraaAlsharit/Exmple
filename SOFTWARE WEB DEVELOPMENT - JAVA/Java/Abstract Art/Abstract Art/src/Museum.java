import java.util.ArrayList;

public class Museum {

    public static void main(String[] args) {
        Painting pain1 = new Painting("The Boating Party", "Mary Cassatt", "woman, man, and child on small sailboat",
                "oil on canvas");
        Painting pain2 = new Painting("Red Canna", "Georgia O'Keefe", "red flowers in a vase", "watercolor on paper");
        Painting pain3 = new Painting("Der Kuss", "Gustav Klimpt", "a couple embrace", "oil and gold leaf on canvas");

        Sculpture sculp1 = new Sculpture("Winged Victory of Samothrace", "unknown", "depicts the goddess Nike",
                "marble");
        Sculpture sculp2 = new Sculpture("David", "Michelangelo", "depicts biblical figure David", "marble");

        ArrayList<Art> museum = new ArrayList<Art>();
        museum.add(pain1);
        museum.add(pain2);
        museum.add(pain3);

        museum.add(sculp1);
        museum.add(sculp2);

        for (Art art : museum) {
            art.viewArt();
        }


    }
}
