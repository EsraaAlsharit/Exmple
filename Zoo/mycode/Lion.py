from Animal import Animal

class Lion(Animal):
    def __init__(self,name,tail) -> None:
        super().__init__(name,hp = 10)
        self.type = "Monkey"
        self.tail = tail