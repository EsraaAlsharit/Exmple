from BankAccount import BankAccount

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self
        

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
        

    def display_user_balance(self):
        self.account.display_account_info()

    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        

u1 = User("Esraa","esraa@gmail.com")
u1.make_deposit(300).make_deposit(600).make_deposit(500).make_withdrawal(140)
u1.display_user_balance()



