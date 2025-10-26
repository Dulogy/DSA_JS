class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    // insert at end
    append(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // insert at start  2->3   1->2>3
    prepend(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // delete node
    delete(){

    }

    printForward(){
        let current = this.head;
        let arr = [];
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr)
    }
    printBackward(){
        let current = this.tail;
        let arr = [];
        while(current){
            arr.push(current.value);
            current = current.prev;
        }
    }
}

let dll1 = new DoublyLinkedList();
dll1.append(1);
dll1.append(2);
dll1.prepend(3);
dll1.prepend(4);
dll1.printForward();
dll1.printBackward();