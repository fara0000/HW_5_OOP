function LinkedNode(value) {
    this.value = value;
    this.next = null;
}

function LinkedList () {
    this.root = null;
    this.size = 0;
}

LinkedList.prototype.addElmAtStart = function (value) {
    let tempNode = new LinkedNode(value);

    tempNode.next = this.root;
    this.root = tempNode;
    this.size += 1;

    return this.size;
};

LinkedList.prototype.init = function (array) {
    if (!Array.isArray(array)) return 'Please check your input!';
        for (let i = array.length - 1; i >= 0; i--) {
            this.addElmAtStart(array[i]);
        }
};

LinkedList.prototype.toArray = function(value) {
    
    let arr = [];
    let tempNode = this.root;
    while(tempNode) {
        arr.push (tempNode.value) 
        tempNode = tempNode.next
    }
    return arr;
}

LinkedList.prototype.clear = function() { 

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

LinkedList.prototype.getSizeOfList = function() { //getSize
    return this.size;
}

LinkedList.prototype.deleteFirstElm = function() { // shift
    let firstElm = this.root.value;
    let tempNode = this.root.next;

    this.root = tempNode;
    this.size -= 1;

    return firstElm;
}

LinkedList.prototype.deleteLastElm = function() { //pop
    let result = null; 
    let previous = null;
    let tempNode = this.root;
    
    while(tempNode) { 
        previous = tempNode; 
        tempNode = tempNode.next;
        if(!tempNode.next) {
            result = tempNode.value;
            previous.next = null;
            this.size -= 1;
            return result;
        }
    }
}

LinkedList.prototype.addElmAtEnd = function(value) { //push
    let tempNode = this.root;
    let newNode = new LinkedNode(value);
    while(tempNode){
        tempNode = tempNode.next;
        if(!tempNode.next) {
            tempNode.next = newNode;
            this.size += 1
            return this.toArray();
        }
    }
}




