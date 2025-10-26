class TreeNode {
  constructor(val){
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  maxDepth(root){
    if(root == null){
      return 0;
    }
    let count = 0;
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
      let queueSize = queue.length;
      for(let i = 0; i < queueSize; i++){
        let node = queue.shift();
        if(node.left){
          queue.push(node.left);
        }
        if(node.right){
          queue.push(node.right);
        }
      }
      count++;
    }
    return count;
  }
}

let root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(8);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left.right = new TreeNode(6);
let res = new Solution();
let ans = res.maxDepth(root);
console.log(ans);