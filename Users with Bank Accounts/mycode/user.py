from BankAccount import BankAccount

class User:
    def __init__(self, name):  # now our method has 2 parameters!
        self.name = name			# and we use the values passed in to set the name attribute
        self.account= BankAccount()

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
        

u1 = User("Esraa")
u1.make_deposit(20).make_deposit(16).make_deposit(6).make_withdrawal(10)
u1.display_user_balance()



