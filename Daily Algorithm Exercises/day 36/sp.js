class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    Min(node = this.root) {

        if (node.left === null) {
            return node.data;
        }
        else {
            return this.Min(node.left);
        }
    }

    Max(node = this.root) {

        if (node.right === null) {
            return node.data;
        }
        else {
            return this.Max(node.right);
        }
    }

    insert(newVal, node = this.root) {
        // code here
        if (this.isEmpty()) {
            this.root = new Node(newVal);
            return this;
        }

        if (newVal > node.data) {

            if (node.right === null) {
                node.right = new Node(newVal);
                return this;
            }
            return this.insert(newVal, node.right);
        } else {

            if (node.left === null) {
                node.left = new Node(newVal);
                return this;
            }
            return this.insert(newVal, node.left);
        }
    }

}


var tree = new BinarySearchTree();
console.log("Is it empty?");
console.log(tree.isEmpty());
tree.insert(5);
tree.insert(8);
tree.insert(5);
tree.insert(3);
tree.insert(11);
console.log("Is it empty? (after insert)");
console.log(tree.isEmpty());
console.log(tree);

console.log(" small "+tree.Min())
console.log(" big "+tree.Max())