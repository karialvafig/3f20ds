class Node2 {

    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }

}

module.exports = Node2;
class DoublyLinkedList {

    constructor() {
        this.head = new Node2("head");
    }

    find(search) {
        let currentNode = this.head;
        while(currentNode.element !== search) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    findLast() {
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(newElement, item) {
        let newNode = new Node2(newElement); // new Node("Cookies");
        let currentNode = this.find(item); // 'Eggs' node
        newNode.next = currentNode.next;
        newNode.previous = currentNode;
        currentNode.next = newNode;
    }

    remove(item) {
        let currentNode = this.find(item);
        if (currentNode.next) {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
            currentNode.next = null;
            currentNode.previous = null;
        }
    }

    display() {
        let currentNode = this.head;
        while(currentNode.next) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        }
    }

    displayReverse() {
        let currentNode = this.head;
        currentNode = this.findLast();
        while(currentNode.previous) {
            console.log(currentNode.element);
            currentNode = currentNode.previous;
        }
    }

}

module.exports = DoublyLinkedList;
let cities = new DoublyLinkedList();
cities.insert("Ciudad de Mexico", "head");
cities.insert("Colima", "Colima");
cities.insert("Queretaro", "Mérida");
cities.insert("Quintana Roo", "Toluca");
cities.display();
console.log();
cities.remove("Colima");
cities.display();