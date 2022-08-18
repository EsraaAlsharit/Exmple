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

    // implement contains()
// implement removeBack()
// implement showList()
}

var newList = new SinglyLinkedList();
console.log(newList.head)
newList.insertAtBack(5).insertAtBack(8).insertAtBack(7).insertAtBack(6);
newList.RemoveHead();
console.log(newList.head)
//newList.insertAtFront(6)
console.log(newList.head)










