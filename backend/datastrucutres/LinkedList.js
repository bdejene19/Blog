

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    /** Functions to implement:
    - add(element)
    - insertAt(element, location)
    - removeFrom(location)
    - removeElement(element)
 
    Helper Methods
    - isEmpty
    - size_Of_List
    - PrintList    
     */

    add(element) {
        let newElement = new LinkedListNode(element);
        if (this.head === null) {
            this.head = newElement;
        } else {
            let curr = this.head;
            while (curr !== null) {
                curr = curr.next;
            }

            curr.next = newElement;
        }
        this.size++;
    }


    insertAt(element, index) {
        let newElement = new LinkedListNode(element);
        let count = 0;

        if (index > this.size || index < 0) {
            console.log('index invalid');
        } else {
            if (index === 0) {
                newElement.next = this.head;
                this.head = newElement;
            } else {
                let currElement = this.head;
                let prev;
                while (count < index) {
                    prev = currElement;
                    currElement = currElement.next;
                    count++;
                }

                prev.next = newElement;
                newElement.next = currElement;
            }
        }

        this.size++;
    }

    //removes by index
    removeByIndex(index) {
        let curr = this.head;

        if (index > this.size || index < 0) {
            console.log('index invalid');
        } else {
            let count = 0;
            let prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {
                while (count < index) {
                    prev = curr;
                    curr = curr.next;
                    count++;
                }

                prev.next = curr.next;
            }
        }

        this.size--;
    }

    // removess by linked list element
    removeByElement(element) {
        let currElement = this.head;
        let prev = null;

        // iterate ll

        while (currElement !== null) {
            // compare elements
            if (currElement.element === element) {
                // check to see removing first element
                if (prev === null) {
                    this.head = currElement.next;
                } else {
                    prev.next = currElement.next;
                }
                this.size--;
                return currElement.element;
            }
            prev = currElemnet;
            currElement = currElement.next;  
        }

        return -1;
    }


    getIndexByElement(element) {
        let count = 0;
        let currElement = this.head;
    
        while (currElement !== null ) {
            if (currElement.element === element) {
                return count;
            } 
            currElement = currElement.next;
            count++;
        }

        return -1;
    }

    isEmpty() {
       return this.size === 0;
    }

    listSize() {
        return this.size;
    }
}

module.exports = LinkedList;
