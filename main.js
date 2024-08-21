import Tree from './tree.js';
import prettyPrint from './prettyPrint.js';

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

prettyPrint(tree.root);
tree.insert(444);
prettyPrint(tree.root);
