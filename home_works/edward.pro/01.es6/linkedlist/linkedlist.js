class linkedList {
    constructor() {
        this.length = 0;
        this.currentNode = null;
        this.firstNode = null;
    }

    add(node) {
        if (!this.currentNode) {
            this.currentNode = node;
            this.firstNode = node;
        }

        else {
            while(this.currentNode.next)
                this.currentNode = this.currentNode.next;

            this.currentNode.next = node;
            this.currentNode = node;
        }

        this.length++;
        return node;
    }

    [Symbol.iterator]() {
        let currentNode = this.firstNode;

        return {
            next() {

                if (!currentNode) {

                    return {
                        done: true
                    }

                } else if (!currentNode.next) {
                    let data = currentNode.data;
                    currentNode = null;

                    return {
                        value: data,
                        done: false
                    }

                } else {
                    let data = currentNode.data;
                    currentNode = currentNode.next;

                    return {
                        value: data,
                        done: false
                    }

                }

            }
        }
    }
}

module.exports = linkedList;