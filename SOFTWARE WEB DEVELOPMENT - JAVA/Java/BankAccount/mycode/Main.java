package mycode;

public class Main {
    public static void main(String[] args) {
        BankAccount user1 = new BankAccount();

        System.out.println(user1.getCheckingbalance());
        user1.depositSavingsbalance(500, user1.getSavingsbalance());
        user1.depositCheckingbalance(1000, user1.getCheckingbalance());
        System.out.println(user1.getCheckingbalance());

        user1.withdrawCheckingbalance(10, user1.getCheckingbalance());
        System.out.println(user1.getCheckingbalance());
        System.out.println(user1.getSavingsbalance());
        

        BankAccount user2 = new BankAccount();
        BankAccount user3 = new BankAccount();

        System.out.println(user1.getNumberAccounts());
        user1.total();
        

    }

}
