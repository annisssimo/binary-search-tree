import Tree from './tree.js';
import prettyPrint from './prettyPrint.js';

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

prettyPrint(tree.root);
tree.insert(444);
prettyPrint(tree.root);
tree.deleteItem(4);
console.log('tree with 4 deleted');
prettyPrint(tree.root);
console.log('searching for 4:', tree.find(4));
console.log('searching for 1:', tree.find(1));
