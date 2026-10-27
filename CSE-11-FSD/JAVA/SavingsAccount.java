public class SavingsAccount extends BankAccount {

    SavingsAccount(String accName, long accNumber, float balance) {
        super(accName, accNumber, balance);
    }

    void addInterest() {
        balance += (balance * r) / 100;
    }
}