class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(data){
        this.head = new LinkedListNode;
        this.tail = this.head;
        this.head.data = data;
    }

    empty(){
        this.head = null;
        this.tail = null;
    }

    isEmpty(){
        if (!this.head){
            return true;
        }
        return false;
    }

    insertAtEnd (data){

        if(this.isEmpty()){
            this.tail = new LinkedListNode(data);  
            this.head = this.tail;          
            return true;
        }

        this.tail.next = new LinkedListNode(data);
        this.tail.next.prev = this.tail;
        this.tail = this.tail.next;
        
        return true;

    } 

    insertAtStart(data){

        if(this.isEmpty()){
            this.head = new LinkedListNode(data);
            this.tail = this.head;
            return true;
        }

        let current = this.head;
        this.head = new LinkedListNode(data);
        this.head.next = current;
        this.head.next.prev = this.head;

        return true;
    }

    insertAtPosition(position,data){
        
        if(this.isEmpty()){
            if(position!=1){
                throw `Position ${position} is out of range`;
            }
            this.head = new LinkedListNode(data);
            this.tail = this.head;
            return true;   
        }

        let current = this.head;
        
        for(let i= 1; i<position-1;i++){
            
            if(current.next){
                current=current.next;
            } else{
                throw `Position ${position} is out of range`;
            }
            
        }
        let new_node = new LinkedListNode(data);
        new_node.next = current.next;
        if(current.next){
            current.next.prev = new_node;
        }
        current.next = new_node;
        new_node.prev = current;

        return true;
    }

    deleteAtPosition(position){
        
        if(this.isEmpty()){
            throw `Empty list, nothing to delete`;
        }
      
         let current = this.head;
        
        for(let i= 1; i<position;i++){
            
            if(current.next){
                current=current.next;
            } else{
                throw `Position ${position} is out of range`;
            }
   
        }

        if(current===this.head){
            if(current.next){
                this.head = current.next;
            }else{
                this.head = null;
            }
        }

        if(current===this.tail){
            this.tail = null;
        }
        
        if(current.prev){
            current.prev.next = current.next;
        }

        if(current.next){
            current.next.prev = current.prev;
        }
        
        current = undefined;

        return true;
    }

    logData(){

        if(this.isEmpty()){
            throw "Empty list, nothing to log";
        }

        let current = this.head;
        console.log(current.data);
        
        while(current.next){
            current = current.next;
            console.log(current.data);
        }

    }
}

/* some random tests */
let counter = 1;

let lista = new LinkedList(counter);
lista.deleteAtPosition(1);
lista.insertAtPosition(1,12);
lista.logData();
