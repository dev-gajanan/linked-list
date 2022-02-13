var head;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Insert data to first of the linked list
function insertDataAtHead(data) {
    var temp = new Node(data);
    //add element to the first node
    temp.next = head;
    head = temp; //move the head to new node
    
}

//Insert data last(tail) of the linked list
function insertDataAtTail(data) {
    var temp = new Node(data);
    
    //check if the list is empty
    if(head == null) {
        head = new Node(data);
        return;
    }

    temp.next = null;
    var tail = head;
    while(tail.next != null) {
        tail = tail.next;
    }
    tail.next = temp;
    return;
}

//Insert data at any index of the list
function insertDataAtIndex(position, data) {
    var temp = head;
    let ctr = 1;

    while(ctr < position - 1) {
        temp = temp.next;
        ctr++;
    }

    //create a node for new data
    var node = new Node(data);
    node.next = temp.next;
    temp.next = node;

}

//print list
function print() {
    let result = "";
    var temp = head;
    while(temp != null) {
        result += temp.data + " ";
        temp = temp.next;
    }
    console.log("List:", result);
}


function main() {

    //create a new node
    const node = new Node(10);
    //Head point to new node
    head = node;

    print();
    insertDataAtTail(12);
    print();
    insertDataAtTail(15);
    print();
    insertDataAtIndex(3, 14);
    print();

    return 0;

}

main();