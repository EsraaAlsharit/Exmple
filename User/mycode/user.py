class User:
    def __init__(self, name, amount):  # now our method has 2 parameters!
        self.name = name			# and we use the values passed in to set the name attribute
        self.account_balance = amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        

    def make_deposit(self, amount):
        self.account_balance += amount
        

    def display_user_balance(self):
        print(self.name, ", Balance: $", self.account_balance)

    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        

u1 = User("esraa", 500)
u1.make_deposit(20)
u1.make_deposit(16)
u1.make_deposit(6)
u1.make_withdrawal(10)
u1.display_user_balance()

u2 = User("reem", 150)
u2.make_deposit(20)
u2.make_deposit(16)
u2.make_withdrawal(32)
u2.make_withdrawal(40)
u2.display_user_balance()

u3 = User("michael", 1000)
u3.make_deposit(5000)
u3.make_withdrawal(3000)
u3.make_withdrawal(500)
u3.make_withdrawal(122)
u3.display_user_balance()

u1.transfer_money(u3,50)
print("")
u1.display_user_balance()
u3.display_user_balance()

