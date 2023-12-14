const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*class Node {
*  constructor(data) {
*    this.data = data;
*    this.left = null;
*    this.right = null;
*  }
*}
*/
class BinarySearchTree {
  constructor() {
    this.node = null;
  }
  root() {
    
    return this.node;
  }

  add(data) {
    this.node = addNode(this.node, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      // return node;
    }
  }

  has(data) {
    return searchNode(this.node, data);

    function searchNode(node, data) {

      if (!node) return false;

      if (node.data === data) return true;
      
      if (node.data > data) {
        searchNode(node.left, data);
      } else {
        searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return searchNode(this.node, data);
    function searchNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (node.data > data) {
        searchNode(node.left, data);
      } else {
        searchNode(node.right, data);
      }
    }
  }

  remove(data) {
    
    this.node = removeNode(this.node, data);
    function removeNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft) {
          maxFromLeft=maxFromLeft.right;
        }
        node.data = maxFromLeft.data;

        node.left = removeNode(node.left, maxFromLeft.data);

        return node;
      }
    }

  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};