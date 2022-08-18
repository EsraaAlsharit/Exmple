class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        if (this.head == null) {
            this.head = new Node(data);
        } else {
            let runner = this.head;
            while (runner.next !== null) {
                runner = runner.next;
            }
            runner.next = new Node(data);
        }
        return this;
    }

    RemoveHead() {
        if (this.head === null) {

        }
        let runner = this.head;
        if (runner.next != null) {
            runner = runner.next;
        }
        this.head = runner;
    }

    insertAtFront(data) {
        if (this.head !== null) {
            var temp = this.head;
            this.head = new Node(data)
            this.head.next = temp
        } else {
            this.head = new Node(data)
        }
    }

    average() {
        if (this.head == null) {
            return this;
        } else {
            let runner = this.head;
            var sum = 0
            while (runner.next !== null) {
                sum += runner.data;
            }
        }
    }

    removeVal(num) {
        let runner = this.head;
        if (runner.data == num) {
            this.head = runner.next
        }
        while (runner.next !== null) {
            if (runner.next.data == num) {
                runner.next = runner.next.next.data
                break
            }
            runner = runner.next;
        }


    }

    SenLast() {
        let runner = this.head;
        while (runner.next.next !== null) {
            runner = runner.next;
        }
        return runner.data
    }
}

var newList = new SinglyLinkedList();
newList.insertAtBack(5).insertAtBack(8).insertAtBack(7).insertAtBack(6).insertAtBack(3);
console.log(newList.head)
console.log(newList.SenLast())
newList.removeVal(8)
console.log(newList.head)











