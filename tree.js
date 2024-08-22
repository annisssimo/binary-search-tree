import Node from './node.js';

class Tree {
  constructor(array) {
    this.root = this.buildTree([...new Set(array)].sort((a, b) => a - b));
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const middle = Math.floor(array.length / 2);
    const root = new Node(array[middle]);

    root.left = this.buildTree(array.slice(0, middle));
    root.right = this.buildTree(array.slice(middle + 1));

    return root;
  }

  insert(value, node = this.root) {
    if (node === null) return new Node(value);

    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  deleteItem(value, node = this.root) {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      const minValue = this.findMinValue(node.right);
      node.data = minValue;
      node.right = this.deleteItem(minValue, node.right);
    }

    return node;
  }

  findMinValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  find(value, node = this.root) {
    if (node === null || node.data === value) return node;

    if (value < node.data) return this.find(value, node.left);
    if (value > node.data) return this.find(value, node.right);
  }

  levelOrder(callback) {
    if (!callback) throw new Error('A callback is required');

    const queue = [this.root];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      callback(currentNode);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  inOrder(callback, node = this.root) {
    if (!callback) throw new Error('A callback is required');

    callback(node);
    if (node !== null) {
      this.inOrder(callback, node.left);
      callback(node);
      this.inOrder(callback, node.right);
    }
  }

  preOrder(callback, node = this.root) {
    if (!callback) throw new Error('A callback is required');

    callback(node);
    if (node !== null) {
      callback(node);
      this.inOrder(callback, node.left);
      this.inOrder(callback, node.right);
    }
  }

  postOrder(callback, node = this.root) {
    if (!callback) throw new Error('A callback is required');

    callback(node);
    if (node !== null) {
      this.inOrder(callback, node.left);
      this.inOrder(callback, node.right);
      callback(node);
    }
  }
}

export default Tree;
