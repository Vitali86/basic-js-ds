const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = {};
    this.head = 0;
    this.last = 0;
  }

  getUnderlyingList() {
    let underlyingList = null;

    function addToList(data) {
      underlyingList = addListNode(underlyingList, data);
  
      function addListNode(underlyingList, data) {
        if (!underlyingList) {
          return new ListNode(data);
        } else {
          underlyingList.next = addListNode(underlyingList.next, data);
        }
        
        return underlyingList;
      }
    }

    let start = this.head;

    while (start < this.last) {
      addToList(this.list[start]);
      start++;
    }
    
    return underlyingList;
  }

  enqueue(value) {
    this.list[this.last] = value;
    this.last += 1;
  }

  dequeue() {
    let deleted = this.list[this.head];
    delete this.list[this.head];
    this.head += 1;
    return deleted
  }
}

module.exports = {
  Queue
};
