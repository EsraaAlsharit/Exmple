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

    print() {
        if (this.head != null) {
            let runner = this.head;

            while (runner.next !== null) {
                console.log(runner.data)
                runner = runner.next;
            }
            console.log(runner.data)
        }
    }

    prePend(newVal, targetVal) {
        let runner = this.head;
        while (runner.next != null) {
            if (runner.next.data == targetVal) {
                var temp = runner.next
                runner.next = new Node(newVal)
                runner.next.next = temp
                return true
            }
            runner = runner.next
        }
        return false
    }

    removeVal(num) {
        if (this.head != null) {
            let runner = this.head;
            if (runner.data == num) {
                this.head = runner.next
            }
            else {
                while (runner.next !== null) {
                    if (runner.next.data == num) {
                        runner.next = runner.next.next
                        break
                    }
                    runner = runner.next;
                }
            }
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
// newList.insertAtBack(5);
newList.print()
console.log()
console.log(newList.SenLast())
newList.removeVal(7)
console.log()
newList.print()
// console.log(newList.head)











