public class CurrentAccount extends BankAccount{
    CurrentAccount(String accName, long accNumber, float balance) {
        super(accName, accNumber, balance);
    }
    
    void addInterest() {
        balance += (balance * r) / 100;
    }
}