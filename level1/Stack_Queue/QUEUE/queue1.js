// First in first out
// Queue Questions
// Implement a circular queue.
// Implement a queue using two stacks.
// Design a priority queue in JS.
// Implement LRU cache using queue + hash map.
// Generate binary numbers from 1 to n using a queue.
// Implement a deque (double-ended queue).
// Find the first non-repeating character in a stream using a queue.
class Queue {
    constructor(){
        this.queue = [];
        this.count = 0;
        this.left = 0;
        this.right = 0;
    }

    enqueue(item){
        this.queue[right] = item;
        this.length++;
        this.right++;
        this.printQueue();
    }

    dequeue(){
        
        this.printQueue();
    }

    front(){
        
    }

    isEmpty(){
        let ans = this.size() ? false : true;
        console.log("Empty",ans);
        return ans;
    }
    size(){
        let size = this.queue.length;
        console.log("size",size);
        return size;
    }

    printQueue(){
        console.log("Array",this.queue);
    }
}

let q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.dequeue();
q1.enqueue(100);
q1.dequeue();
q1.dequeue();
q1.front();
q1.isEmpty();
q1.size();
