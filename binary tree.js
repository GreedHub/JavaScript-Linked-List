class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class LinkedList {
    constructor(data){
        this.head = new LinkedListNode;
        this.tail = this.head;
        this.head.data = data;
    }

    insertAtEnd (data){
        let current;

        if(this.head){
            current = this.head;
        }
        
        while(current.next){
            current = current.next;
        }

        current.next = new LinkedListNode(data);

        current.next.prev = current;
        this.tail = current.next;

        return true;

    } 

    insertAtStart(data){
        let current;

        if(this.head){
            current = this.head;
        }

        this.head = new LinkedListNode(data);
        this.head.next = current;
        this.head.next.prev = this.head;

        return true;
    }

    insertAtPosition(position,data){
        let current;

        if(this.head){
            current = this.head;
        }
        
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
        let current;

        if(this.head){
            current = this.head;
        }
        
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
        let current;

        if(this.head){
            current = this.head;
        }

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
counter++
lista.insertAtEnd(counter);
lista.insertAtStart(0);
counter ++ ;
lista.insertAtEnd(counter);

lista.insertAtPosition(4,2.5);

lista.deleteAtPosition(5);

lista.logData();