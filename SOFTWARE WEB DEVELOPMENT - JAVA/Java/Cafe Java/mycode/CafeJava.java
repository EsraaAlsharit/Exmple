package mycode;

import java.net.SocketPermission;

public class CafeJava {
    public static void main(String[] args) {

        // APP VARIABLES
        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is %.2f$";

        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double LattePrice = 4.5;
        double DropPrice = 2.0;
        double CappuccinePrice = 2.5;

        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;

        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:

        // ** Your customer interaction print statements will go here ** //
        System.out.println(generalGreeting + customer1);
        // Displays "Welcome to Cafe Java, Cindhuri"
        if (isReadyOrder1) {
            System.out.println(customer1 + readyMessage);
            System.out.println(String.format(displayTotalMessage, mochaPrice));
        } else {
            System.out.println(customer1 + pendingMessage);
        }

        System.out.println(generalGreeting + customer4);
        if (isReadyOrder4) {
            System.out.println(customer4 + readyMessage);
            System.out.println(String.format(displayTotalMessage, CappuccinePrice));
        } else {
            System.out.println(customer4 + pendingMessage);
        }
        System.out.println();

        System.out.println();
        System.out.println(generalGreeting + customer2);

        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
            System.out.println(String.format(displayTotalMessage, LattePrice * 2));
        } else {
            System.out.println(customer2 + pendingMessage);
        }

        // System.out.println();
        // System.out.println(generalGreeting + customer3);
        // if (isReadyOrder3) {
        //     System.out.println(customer3 + readyMessage);
        //     System.out.println(String.format(displayTotalMessage, DropPrice));
        // } else {
        //     System.out.println(customer3 + pendingMessage);
        // }

        System.out.println();
        System.out.println(generalGreeting + customer3);
        if (isReadyOrder4) {
            System.out.println(customer3 + readyMessage);
            System.out.println(String.format(displayTotalMessage, (LattePrice - DropPrice)));
        } else {
            System.out.println(customer3 + pendingMessage);
        }
        System.out.println();
    }

}