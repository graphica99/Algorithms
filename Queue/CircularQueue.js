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
}

var QueueTwoPointers = new Queue(0, 0, 7);
