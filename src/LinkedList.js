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

LinkedList.prototype.init = function(array) { //init
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

LinkedList.prototype.clear = function() { //clear
    this.root = null;
    this.size = 0;
}

LinkedList.prototype.toString = function() { //toString
    let getString = "' ";
    let tempNode = this.root;
    while(tempNode){
        getString += tempNode.value + ', ';
        tempNode = tempNode.next;
    }
    getString += "'"
    return getString ;
}

LinkedList.prototype.getListSize = function() { //getSize
    let result = 0;
    let tempNode = this.root;
    while(tempNode){
        tempNode = tempNode.next;
        result++;
    }
    return result;
}

LinkedList.prototype.deleteFirstElm = function() { // shift
    let FirstElm = this.root.value;
    let tempNode = this.root.next;
    this.root = tempNode;
    this.size -= 1
    return FirstElm;
}

LinkedList.prototype.deleteLastElm = function() { //pop
    let result = null;
    let previous = null;
    let tempNode = this.root;
    while(tempNode){
        previous = tempNode;
        tempNode = tempNode.next;
        if (!tempNode.next){
            result = tempNode.value;
            previous.next = null;
            this.size -= 1;
            return result;
            
        }
    }
}

LinkedList.prototype.addElmAtEnd = function(value) { //push
    let newNode = new LinkedNode(value);
    let tempNode = this.root;
    while(tempNode){
        tempNode = tempNode.next;
        if (!tempNode.next){
            tempNode.next = newNode;
            this.size += 1;
            return this.toArray()
        }
    }
}




