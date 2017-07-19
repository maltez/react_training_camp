const Node = require('./node');
const LinkedList = require('./linkedlist');

const myList = new LinkedList();
myList.add(new Node( {title: 'Rome'} ));
myList.add(new Node( {title: 'Napoli'} ));
myList.add(new Node( {title: 'Filenze'} ));
myList.add(new Node( {title: 'Pisa'} ));
myList.add(new Node( {title: 'Rome'} ));

console.log("My next vacation route\n");

for (let value of myList)
    console.log(value.title);
