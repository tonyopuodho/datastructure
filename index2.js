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

    push(value){
        let newNode = new Node(value)
         
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    pop(){
        let temp = this.head
        let prev = this.head

        while(temp.next){
            prev = temp
            temp = prev.next
        }

        this.tail = temp
        this.tail.next = null
        this.length--

        return temp
    }
}

const linkedList = new LinkedList(1)
console.log(linkedList)
