class BinaryTree {
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
class BinaryTreeSolution {
    treeTraversal(root) {
        let result = [];
        let inorder = [];
        this.inorderTraversal(root,inorder);
        let preorder = [];
        this.preorderTraversal(root,preorder);
        let postorder = [];
        this.postorderTraversal(root,postorder);
        result.push(inorder);
        result.push(preorder);
        result.push(postorder);
        return result;
    }
    inorderTraversal(root,inorder){
        if(root == null){
            return null
        }
        this.inorderTraversal(root.left,inorder);
        inorder.push(root.data);
        this.inorderTraversal(root.right,inorder);
    }
    preorderTraversal(root,preorder){
        if(root == null){
            return null;
        }
        preorder.push(root.data);
        this.preorderTraversal(root.left,preorder);
        this.preorderTraversal(root.right,preorder);
    }
    postorderTraversal(root,postorder){
        if(root == null){
            return null;
        }
        this.postorderTraversal(root.left,postorder);
        this.postorderTraversal(root.right,postorder);
        postorder.push(root.data);
    }

}

let root = new BinaryTree(5);
root.left = new BinaryTree(1);
root.right = new BinaryTree(2);
root.left.left = new BinaryTree(8);
root.right.left = new BinaryTree(4);
root.right.right = new BinaryTree(5);
root.left.left.right = new BinaryTree(6);

let BTT = new BinaryTreeSolution();
let res = BTT.treeTraversal(root);
console.log(res);
