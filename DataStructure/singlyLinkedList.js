class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length +=1
    }

    pop(){
        if(!this.head) return undefined
        let current = this.head
        let newtail = current
        while(current.next){
            newtail = current
            current = current.next
        }
        this.tail = newtail
        this.tail.next = null
        this.length --
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length --
        return currentHead
    }

    unShift(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head = newNode.next
            this.head = newNode
        }
        this.length++
        return newNode
    }

    get(index){
        if(index < 0 || index >= this.length) return null
        var counter = 0
        var current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }

    set(index, value){
        var foundNode = this.get(index)
        if(foundNode){
           foundNode.val = value
           return true
        }
        return false
    }
}