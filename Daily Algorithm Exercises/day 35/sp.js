class Queue {
    constructor(item = []) {
        this.item = item;
    }

    size() {
        return this.item.length
    }

    Enqueue(num) {
        this.item[this.item.length] = num
        return this.item
    }

    Dequeue() {
        var arr = []
        if (this.item.length == 1) {
            this.item = arr
        } else {
            for (let index = 1; index < this.item.length; index++) {
                arr[index - 1] = this.item[index]
            }
            this.item = arr
        }
        return this.item
    }
    Front() {
        return this.item[0]
    }

    isEmpty() {
        if (this.item.length == 0) {
            return true
        } else {
            return false
        }
    }

}

var Mcqueu = new Queue([1, 5, 6, 8, 9, 8]);
console.log(Mcqueu.isEmpty())
console.log(Mcqueu.size())
Mcqueu.Enqueue(10)
console.log(Mcqueu)
Mcqueu.Dequeue()
console.log(Mcqueu)
