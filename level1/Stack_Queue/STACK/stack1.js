// last in first out
// Implement a function to reverse a string using a stack.
// Check for balanced parentheses using a stack. Example: "({[]})" → Valid.
// Implement min stack → Stack that returns minimum in O(1).
// Convert infix to postfix expression using a stack.
// Evaluate a postfix expression using a stack.
// Implement a stack using two queues.
// Detect next greater element using a stack.
class Stack{
    constructor(){
        this.stack = [];
    }
    push(item){
        this.stack.push(item);
        console.log("Stack",this.stack);
    }
    pop(){
        this.stack.pop();
        console.log("Stack",this.stack);
    }
    peek(){
        console.log("Peek",this.stack[this.stack.length-1]);
    }
    isEmpty(){
        let ans = this.stack.length > 0 ? false : true;
        console.log("IsEmpty",ans);
    }
    size(){
        console.log("Size",this.stack.length)
    }
}
let s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30)
s1.pop();
s1.peek();
s1.isEmpty();
s1.size();