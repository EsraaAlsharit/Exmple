package mycode;

import java.util.Random;

public class BankAccount {
    private double checkingbalance;
    private double savingsbalance;
    private static int numberAccounts = 0;
    private static int totalAmount;

    private String accountNumber;
    

    public BankAccount() {
        numberAccounts++;
        GanerteAccount();
    }

    public static int getNumberAccounts() {
        return numberAccounts;
    }

    public static void setNumberAccounts(int numberAccounts) {
        BankAccount.numberAccounts = numberAccounts;
    }

    public static int getTotalAmount() {
        return totalAmount;
    }

    public static void setTotalAmount(int totalAmount) {
        BankAccount.totalAmount = totalAmount;
    }

    public double getCheckingbalance() {
        return checkingbalance;
    }

    public void setCheckingbalance(double checkingbalance) {
        this.checkingbalance = checkingbalance;
    }

    public double getSavingsbalance() {
        return savingsbalance;
    }

    public void setSavingsbalance(double savingsbalance) {
        this.savingsbalance = savingsbalance;
    }

    public void depositCheckingbalance(int amount, double account) {
        this.setCheckingbalance(account += amount);
        totalAmount += amount;
    }

    public void depositSavingsbalance(int amount, double account) {
        this.setSavingsbalance(account += amount);
        totalAmount += amount;
    }

    public void withdrawSavingsbalance(int amount, double account) {
        if (account >= amount) {
            this.setSavingsbalance(account -= amount);
            totalAmount -= amount;
        } else {
            System.out.println("Error Process");
        }
    }

    public void withdrawCheckingbalance(int amount, double account) {
        if (account >= amount) {
            this.setCheckingbalance(account -= amount);
            totalAmount -= amount;
        } else {
            System.out.println("Error Process");
        }
    }

    public void total() {
        System.out.println(this.getCheckingbalance() + this.getSavingsbalance());
    }

    private void GanerteAccount() {
        Random random = new Random();
        System.out.print(random.nextInt(100));

    }

}
