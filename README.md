# Binary Search Tree Implementation

## Overview

This project implements a Binary Search Tree (BST) in JavaScript. It includes classes for `Node` and `Tree`, along with several tree manipulation and traversal methods. The implementation allows for creating a balanced binary search tree from an array of numbers, performing various tree traversals, inserting and deleting nodes, and ensuring the tree remains balanced.

## Project Structure

- **`Node` Class:** Represents a single node in the binary search tree. Each node contains data and references to its left and right children.
  
- **`Tree` Class:** Manages the entire binary search tree. It includes methods for building the tree from an array, inserting and deleting nodes, traversing the tree, checking balance, and rebalancing the tree.

- **`prettyPrint` Function:** A utility function that visually prints the tree structure to the console.

## Features

### Node Class

- **Attributes:**
  - `data`: Stores the value of the node.
  - `left`: Reference to the left child node.
  - `right`: Reference to the right child node.

### Tree Class

- **Constructor:**
  - Initializes the tree from a sorted array of unique elements, building a balanced BST.

- **Methods:**
  - `buildTree(array)`: Recursively builds a balanced BST from a sorted array and returns the root node.
  - `insert(value)`: Inserts a new value into the BST, maintaining its properties.
  - `deleteItem(value)`: Deletes a value from the BST and handles different cases (no children, one child, two children).
  - `find(value)`: Finds and returns the node containing the specified value.
  - `levelOrder(callback)`: Traverses the tree in breadth-first level order and applies a callback to each node.
  - `inOrder(callback)`: Traverses the tree in in-order depth-first order and applies a callback to each node.
  - `preOrder(callback)`: Traverses the tree in pre-order depth-first order and applies a callback to each node.
  - `postOrder(callback)`: Traverses the tree in post-order depth-first order and applies a callback to each node.
  - `height(node)`: Returns the height of the specified node.
  - `depth(node)`: Returns the depth of the specified node.
  - `isBalanced()`: Checks if the tree is balanced.
  - `rebalance()`: Rebalances the tree if it is unbalanced.

### Driver Script

The script demonstrates the use of the `Tree` class by:

1. Creating a BST from a randomly generated array.
2. Checking if the tree is balanced.
3. Printing the tree structure and its elements in different traversal orders.
4. Unbalancing the tree by inserting large values.
5. Rebalancing the tree and verifying its balanced state.
6. Printing the tree structure and its elements again after rebalancing.

## Usage

### Installation

Clone the repository and navigate to the project directory.

```bash
git clone <https://github.com/annisssimo/binary-search-tree.git>
cd <binary-search-tree>
```

### Running the Script

To execute the script and see the binary search tree in action, run the following command in your terminal:

```bash
node main.js
```

### Example Output

- **Initial Tree:** A balanced BST created from a random array.
- **Tree Traversals:** Display the nodes in level order, pre-order, in-order, and post-order.
- **Unbalanced Tree:** A tree that has been unbalanced by adding several large values.
- **Rebalanced Tree:** The tree after rebalancing, restoring its balanced state.

### Requirements

- Node.js (v12+)
- JavaScript ES6+
