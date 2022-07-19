package mycode;

import java.util.Date;

public class AlfredQuotes {

    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }

    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return String.format("%s. Lovely to see you.", name);
        // return "Greeting " + name;
    }

    public String dateAnnouncement() {
        // Date date = new Date();
        // return "" + date;
        return String.format("It is currently %s", new Date());
    }

    // public String respondBeforeAlexis(String conversation) {
    //     // YOUR CODE HERE
    //     return "for snarky response return string";
    // }

      // Inputs: String (Any phrase)
    // Return Type: String
    // Output: A repsonse (String)
    public String answeringBeforeAlexis(String phrase) {

        if(phrase.indexOf("Alexis") > -1) {
            return "She's really of no help. What can I get for you?";
        }

        if (phrase.indexOf("Alfred") > -1) {
            return "At your service, naturally. How may I be of assistance?";
        }

        return "Right. And with that I shall retire.";
    }
    // NINJA BONUS
    // See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have
    // learned!
}
