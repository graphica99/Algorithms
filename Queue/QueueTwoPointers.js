var queue = {
  size: this.size,
  front: this.front,
  rear: this.rear,
  arr: this.arr,
};

class Queue {
  constructor(front, rear, size) {
    queue.front = front;
    queue.rear = rear;
    queue.size = size;
    queue.arr = new Array(size);
  }

  enqueue(val) {
    queue.rear++;
    queue.arr[queue.rear] = val;
    console.log(queue.arr);
  }

  dequeue() {
    queue.front++;
    queue.arr[queue.front] = null;
    console.log(queue.arr);
  }

  isEmpty() {
    if (queue.rear === queue.front) {
      console.log("queue is empty");
    }
  }
}

var QueueTwoPointers = new Queue(-1, -1, 7);
// QueueTwoPointers.enqueue(10);
// QueueTwoPointers.enqueue(20);
// QueueTwoPointers.enqueue(30);
QueueTwoPointers.isEmpty();
