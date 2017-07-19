/*create linked list*/

class Node {
  constructor(data) {
    this.data = data;    
    this.next = null
  }
}

class CreateLinkedList {
  constructor() {
    this.head   = null;
    this.length = 0;
  }

  add(data) {
    const nodeToAdd = new Node(data);
    let nodeToCheck = this.head;
    if(!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
	return nodeToAdd;
    }
	while(nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }
	nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }
 
}

let list = new CreateLinkedList();
list.add(100);
list.add(50);
list.add(77);

/*iterator for linked list*/

class LinkedList {
	constructor(list){
        this.list = list;
    }
	
	[Symbol.iterator]() {
	    let current = this.list.head;
		console.log(current);
	    return {
		    next() {
			    if (current) {
					let value  = current.data;
					current = current.next;
					return {value : value , done: false};
			    }
			    return {done: true};
			}
	    };
	};
};

const listItems = new LinkedList(list);

for (let value of listItems) {
   console.log(value);
}


