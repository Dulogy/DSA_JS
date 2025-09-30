class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null
    }

    // insert at last
    append(value){
        let currentNode = new Node(value);
        if(!this.head){
            this.head = currentNode;
            this.tail = currentNode;
        }else{
            this.tail.next = currentNode;
            this.tail = currentNode;
        }
    }

    // insert at front
    prepend(value){
        let currentNode = new Node(value);
        if(!this.head){
            this.head = currentNode;
            this.tail = currentNode;
        }else{
            currentNode.next = this.head;
            currentNode.next = this.head.prev;
            this.head = currentNode;
        }
    }

    // insert at k position
    inserAtKthPosition(val,pos){
        if(pos == 1){
            this.prepend(val);
            return;
        }
        let count = 1;
        let current = this.head;
        while(count < pos-1){
            current = current.next;
            count++;
        }
        let newNode = new Node(val);
        let tempNode = current.next;
        current.next = newNode;
        newNode.next = tempNode;

    }

    // delete head
    deleteHead(){
        let current = this.head;
        let tempNode = current.next;
        this.head = tempNode;
    }

    // delete tail
    deleteTail(){
        let current = this.head;
        while(current.next && current.next.next){
            current = current.next;
        }
        if(this.head == this.tail){
            this.head = null;
        }
        this.tail = current;
        this.tail.next = null;
    }

    // delete k index
    deleteKthElement(pos){
        if(pos == 0){
            return ;
        }
        let current = this.head;
        let count = 1;
        if(pos == 1){
            let tempNode = current.next;
            this.head = tempNode;
            return;
        }
        while(count < pos-1){
            current = current.next;
            count++;
        }

        let tempNode = current.next;
        current.next = tempNode.next;
    }

    // print linked list
    print(){
        let current = this.head;
        let arr = [];
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr.join(" -> "));
    }
}

let s1 = new LinkedList();
s1.append(1);
s1.append(2);
s1.append(3);

s1.print();
s1.inserAtKthPosition(50,1);
s1.print();
s1.deleteHead();
s1.print();
s1.deleteTail();
s1.print();
s1.deleteKthElement(1);
s1.print();
