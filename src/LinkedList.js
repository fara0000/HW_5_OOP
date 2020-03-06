const LinkedNode = require('./LinkedNode');

function LinkedList() {
    this.root = null;
    this.size = 0;
}

LinkedList.prototype.addElmAtStart = function(value) { //unshift
    let tempNode = new LinkedNode(value);
    tempNode.next = this.root;
    this.root = tempNode;
    this.size += 1;
}

LinkedList.prototype.init = function(array) {
    for(i = 0; i < array.length; i++){
        this.addElmAtStart(array[i]);
    }
}

LinkedList.prototype.toArray = function() { //toArray
    let array = [];
    let tempNode = this.root;//toest 1 iy element
    while (tempNode) {
        array.unshift(tempNode.value);
        tempNode = tempNode.next;
    }
    
    return array;
}

LinkedList.prototype.clear = function(){
    this.root = null;
    this.size = 0;
}

LinkedList.prototype.toString = function(){
    
}



const testList = new LinkedList();
testList.init([1,2,3,'fakhri']);
console.log(testList);

console.log(testList.toArray());
// testList.addElmAtStart(5);
// console.log(testList);



