var head;

//Create node
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

//Print the elements of the linked list
function printList() {
    const n = head;
    while(n != null) {
        console.log("Element: ", n.data);
        n = n.next;
    }
}

//Create a simple linked list with 1 node;

function main() {

    const node = new Node(10);
    console.log("Element in linked list: ", node.data);
    console.log("Pointer to the next: ", node.next);

    return 0;

}

main();