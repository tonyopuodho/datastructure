//linked list

class Node{
    constructor(value){
        this.head = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
}
