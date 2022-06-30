/*
Clarify Problem and observe the input
Formulate Approach
Pseudocode
Code
Example Input
Big O

Explain the DOM
The DOM stands for document object model. Published first in October 1, 1998 and developed around the same time as JS
It is an API for the web
It is a tree that represents each item in the document as a node (generally every div tag)
It lets react react

Explain this
JS context. Execution context.
Generally global, block, local
this is determined by how a function is called
ES5 introduced bind to ensure consistent operations for the this keyword and arrow (lambda) functions which don't provide a this biding

Explain React
It can update the DOM. It has a virtual DOM. It has efficient diff checking
Look out for use effect and state. Prop threading is also important.
 */

function isPrime(n){
    if (typeof n != "number" || n < 2) return -1

    for (let i = 2; i < n; i++){
        if (n % i === 0) return false
    }

    return true
}

function nthPrime(n){
    if (typeof n != 'number' || n < 0) return -1

    let counter = 0;
    let idx = 2;
    let result = 0;

    while (counter < n){
        if (isPrime(idx)){
          counter++;
          result = idx;
        }
        idx++
    }

    return result;
}

function countPrimes(n){
    if (typeof n != 'number' || n < 0) return -1

    let primes = []
    let idx = 2;

    while (primes.length < n){
        if (isPrime(idx)) primes.push(idx)
        idx++;
    }

    return primes;
}

function constructBalancedTree(){
    let a = new TreeNode('a');
    let b = new TreeNode('b');
    let c = new TreeNode('c');
    let d = new TreeNode('d');
    let e = new TreeNode('e');
    let f = new TreeNode('f');
    let g = new TreeNode('g');

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;

    return a;
}

function constructUnbalancedTree(){
    let h = new TreeNode('h');
    let i = new TreeNode('i');
    let j = new TreeNode('j');
    let k = new TreeNode('k');
    let l = new TreeNode('l');
    let m = new TreeNode('m');

    h.left = i;
    h.right = k;
    i.right = j;
    k.left = l;
    l.right = m;

    return h;
}

class TreeNode{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function preOrder(root){
    if (!root) return;

    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}

function inOrder(root){
    if (!root) return;

    inOrder(root.left)
    console.log(root.val)
    inOrder(root.right)
}

function postOrder(root){
    if (!root) return;

    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val)
}

// preOrder(constructBalancedTree())
// console.log("")
// inOrder(constructBalancedTree())
// console.log("")
// inOrder(constructBalancedTree())
function bfsIterative(root){
    let queue = [root];
    while (queue.length > 0){
        let node = queue[0]
        console.log(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
}



function bfs(root){
    if (root === null) return []

    let queue = [root]

    while(queue.length){
        console.log(queue[0].val)
        let node = queue.shift();

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
}


function dfs(root) {
    if (root === null) return [];
    let queue = [root]
    while (queue.length) {
        console.log(queue[queue.length-1].val)
        let node = queue.pop();

        if (node.right) queue.push(node.right)
        if (node.left) queue.push(node.left)
    }
}

// dfs(constructBalancedTree())

function stringFragment(s,fragment){
    let result = []

    for (let i = 0; i < s.length; i++) {
        if (fragment[0] === s[i])
            if (s.substr(i, fragment.length) === fragment) result.push(i)
    }

    return result;
}

function fib(n){
    let seq = [0,1]

    for (let i = 2; i < n + 1; i++) {
        seq.push(seq[i-2] + seq[i-1])
    }

    return seq[n]
}

function removeDuplicates(arr){
    //Dont forget to sort
    arr.sort()

    let k = 1;
    let pointer = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[pointer] !== arr[i]){
            pointer++;
            arr[pointer] = arr[i];
            k++;
        }
    }

    for (let i = 0; i < k; i++) {
        result.push(arr[i])
    }

    return result;
}

function nonRepeatedIntegers(arr){
    let map = {}
    let res = []

    for (let i = 0; i < arr.length; i++) {
        if (!map.hasOwnProperty(arr[i])) map[arr[i]] = 0;
        map[arr[i]] ++;
    }

    for (let key in map){
        if (map[key] === 1){
            res.push(key)
        }
    }

    return res;
}

console.log(nonRepeatedIntegers([1,2,3,1,2,3,4,5,6]))
