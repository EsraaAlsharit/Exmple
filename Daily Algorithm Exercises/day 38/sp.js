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
        this.counter=0;
        
    }

    isEmpty() {
        return this.root === null;
    }

    ContainsVal(Val, node = this.root) {
        if(node==null){
            return false
        }
        if (Val < node.data ) {
            return this.ContainsVal(Val, node.right);
        } else if (Val > node.data ) {
            return this.ContainsVal(Val, node.left);
        } else if (Val === node.data) {
            return true
        } else {
            return false
        }
    }

    OrderArray(){
        
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

    Hight(level=0,node = this.root){
        if(node.data!=null){
            level+=1
            if(node.right!=null){
                return this.Hight(level,node.right)
            }if(node.left!=null){
                return this.Hight(level,node.left)
            }
            else{
                return level
            }
        }
    }

    isFull(){
        
    }

    insert(newVal, node = this.root) {
        // code here
        
        if (this.isEmpty()) {
            this.root = new Node(newVal);
            this.counter+=1
            return this;
        }

        if (newVal > node.data) {

            if (node.right === null) {
                node.right = new Node(newVal);
                this.counter+=1
                return this;
            }
            return this.insert(newVal, node.right);
        } else {

            if (node.left === null) {
                node.left = new Node(newVal);
                this.counter+=1
                return this;
            }
            return this.insert(newVal, node.left);
        }
    }

}


var tree = new BinarySearchTree();
console.log("Contains "+tree.ContainsVal(5))
console.log("Is it empty?");
console.log(tree.isEmpty());
tree.insert(5);
tree.insert(8);
tree.insert(5);
tree.insert(3);
tree.insert(11);
tree.insert(9);
tree.insert(9);
tree.insert(9);
tree.insert(9);

// console.log("Is it empty? (after insert)");
tree.insert(15);
tree.insert(15);
tree.insert(15);
console.log(tree.isEmpty());
console.log(tree);

console.log(" small " + tree.Min())
console.log(" big " + tree.Max())

console.log("Contains "+tree.ContainsVal(5))

console.log("counter "+tree.counter);

console.log("Hight "+tree.Hight())