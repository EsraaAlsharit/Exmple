from BankAccount import BankAccount

class User:
    account=[]

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account.append(BankAccount(int_rate=0.02, balance=0))

    def make_withdrawal(self, amount, i):
        self.account[i].withdraw(amount)
        return self
        

    def make_deposit(self, amount, i):
        self.account[i].deposit(amount)
        return self
        

    def display_user_balance(self):
        
        print(len(self.account),"Bank Account")
        for x in self.account:
            x.display_account_info()


    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)

    def newAccount(self):
        self.account.append(BankAccount(int_rate=0.10, balance=200))
        

u1 = User("Esraa","esraa@gmail.com")

u1.make_deposit(300,0).make_deposit(600,0).make_deposit(500,0).make_withdrawal(140,0)
u1.display_user_balance()
u1.newAccount()
u1.display_user_balance()




