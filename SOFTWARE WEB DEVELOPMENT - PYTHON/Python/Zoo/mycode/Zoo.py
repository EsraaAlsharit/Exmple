class Animal:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        self.health = 20
        self.happiness = 10

    def display_info(self):
        print(f'Name: {self.name} | Health: {self.health} | Happiness: {self.happiness}')

class Lion(Animal):
    def __init__(self,name) -> None:
        super().__init__(name,age = 5)
        self.health = 50
        self.happiness = 12

class Tiger(Animal):
    def __init__(self,name) -> None:
        super().__init__(name,age = 3)
        self.health = 40
        self.happiness = 7

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_lion(self, name):
        self.animals.append(Lion(name))

    def add_tiger(self, name):
        self.animals.append(Tiger(name))

    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()


zoo1 = Zoo("John's Zoo")
zoo1.add_lion("Nala")
zoo1.add_lion("Simba")
zoo1.add_tiger("Rajah")
zoo1.add_tiger("Shere Khan")
zoo1.print_all_info()
