package mycode;

import java.util.ArrayList;
import java.util.Scanner;

public class CafeUtil {

    public String getStreakGoal() {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        return "" + sum;
    }

    public String printPriceChart() {
        return "";
    }

    public String getOrderTotal(double[] items) {
        double sum = 0;
        for (int i = 0; i < items.length; i++) {
            sum += items[i];
        }
        // String.format("String: %s ",sum)
        return String.format("%.2f", sum);
    }

    public void displayMenu(ArrayList<String> menu) {
        // for (String str : menu) {
        // System.out.println(str);
        // }
        for (int i = 0; i < menu.size(); i++) {
            System.out.println(i + " " + menu.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        // Scanner cin = new Scanner(System.in);
        System.out.println("Please enter your name:");
        // String name = cin.nextLine();
        String name = System.console().readLine();
        customers.add(name);
        System.out.printf("Hello, %s! There are %d people in front of you", name, customers.size() - 1);
        // System.out.println(customers.get(customers.size() - 1));
    }

}
