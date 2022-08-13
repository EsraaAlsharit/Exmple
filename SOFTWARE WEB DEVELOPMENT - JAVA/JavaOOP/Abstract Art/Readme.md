# Abstract Art
In this assignment we will practice using abstract classes by creating art. We will create an abstract `Art` class and inherit from it to create `Painting` and `Sculpture` classes.
<hr>
- Create an abstract class called Art
```md
// inside of Art.java
public abstract class Art {
// TODO: implement Art class
}
````

The Art class should have the following member variables and an abstract method called `viewArt()`. The viewArt() method should be implemented in the child classes and will be used to print information about the artwork.

| Member Variables     | Abstact Methods |
| -------------------- | --------------- |
| - String title       | void viewArt()  |
| - String author      |                 |
| - String description |                 |

- Create a class called Painting
```md
// inside of Painting.java
public class Painting extends Art {
// TODO: implement Painting class
} 
````

The painting class should inherit from Art, and it should also contain a new member variable called `paintType` (ex. Oil, Watercolor, Acrylic, etc.).

- Create a class called Sculpture
```md
// inside of Sculpture.java
public class Sculpture extends Art {
// TODO: implement Sculpture class
}
````

The sculpture class should also inherit from Art, and it should contain a new member variable called `material` (ex. Marble, Bronze, Porcelain, etc.).

- Inside of a class called Museum create 3 Paintings and 2 Sculptures
```md
// inside of Museum.java
public class Museum {
public static void main(String[] args) {
// TODO: create paintings and sculptures here
}
}
````
<hr>

- **Ninja Bonus** : Store paintings and sculptures in a `Museum` class

We have previously made Arrays and ArrayLists that contain data like String and Integer but we can actually store our own custom classes we've made as well.

```md
ArrayList<Art> museum = new ArrayList<Art> ();
````

- **Ninja Bonus**: Shuffle and print the information for each artwork in the museum

- [x] Create an abstract class called Art with member variables: title, author, description

- [x] Create an abstract method called viewArt()

- [x] Create a Painting class that inherits Art and has an additional member variable paintType

- [x] Create a Sculpture class that inherits Art and has an additional member variable material

- [x] Create 3 instances of Painting

- [x] Create 2 instances of Scupture

- [x] Ninja Bonus: store the paintings and sculptures inside of an ArrayList called museum

- [x] Ninja Bonus: use the viewArt() method of all of the artworks in the museum in a random order
