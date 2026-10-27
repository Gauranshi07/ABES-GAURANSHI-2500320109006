public class BankAccount{
    protected String accName;
    protected long accNumber;
    protected float balance;
    protected float r;

    BankAccount(String accName,long accNumber,float balance){
        this.accName = accName;
        this.accNumber = accNumber;
        this.balance = balance;
    }

    void deposit(int amount){
        balance += amount;
    }

    void withdrawal(int amount){
        if(amount<=balance){
            balance -= amount;
        }
        else{
            System.out.println("Insufficient Balance");
        }
    }

    void checkBalance(){
        System.out.println(balance);
    }
    public static void main(String[] args){
        BankAccount acc = new BankAccount("Gauranshi", 123456789L, 5000f);
        acc.checkBalance();
        acc.deposit(2000);
        acc.checkBalance();
        acc.withdrawal(500);
        acc.checkBalance();
    }
}