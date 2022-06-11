from Tiger import Animal

class Tiger(Animal):
    def __init__(self,name,tail) -> None:
        super().__init__(name,hp = 50)
        self.type = "Tiger"
        self.tail = tail