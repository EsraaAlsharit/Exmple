public class Main {
    public static void main(String[] args) {
        Calculator cal = new Calculator();
        cal.setOperandOne(10.5);
        cal.setOperandTwo(5.2);
        cal.setOperationOne("+");

        cal.performOperation();
        System.out.println(cal.getResults());

    }

}
