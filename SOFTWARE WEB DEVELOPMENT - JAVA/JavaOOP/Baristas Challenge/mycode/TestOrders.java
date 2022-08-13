public class TestOrders {
    public static void main(String[] args) {

        Item item1 = new Item("cappucino", 5.5);
        Item item2 = new Item("Mocha", 6.5);
        Item item3 = new Item("Latte", 4.5);
        Item item4 = new Item("Drip Coffee", 5.0);

        Order order1 = new Order();
        Order order2 = new Order();

        Order order3 = new Order("Anna");
        Order order4 = new Order("Emilie");
        Order order5 = new Order("Coco");

        order3.addItem(item1);
        order3.addItem(item3);

        order1.getStatusMessage();

        order1.setReady(true);
        order1.getStatusMessage();

        order1.display();
        // //Test the total by printing the return value like so:
        // order1.getOrderTotal();
        System.out.println(order1.getOrderTotal());
        System.out.println();
        order3.setReady(true);
        order3.getStatusMessage();

        // //Test the total by printing the return value like so:
        // order1.getOrderTotal();
        System.out.println(order3.getOrderTotal());
        System.out.println();

        order3.addItem(item1);
        order3.addItem(item4);
        order3.addItem(item2);
        order3.display();

    }
}
