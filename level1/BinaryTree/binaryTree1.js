class BinaryTree {
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
console.log(root);