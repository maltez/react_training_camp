/**
 * Created by Edward on 17-Jul-17.
*/

const map = new Map();
map.set(0, {value: "Day 25", next: 1});
map.set(1, {value: "Day 25", next: 2});
map.set(2, {value: "Day 25"});
console.log('Map', map);

/*const linkedList = {
    map: map
};

linkedList[Symbol.iterator] = function() {
    const map = this.map;
    let currentIndex = 0;

    return {

        next: function() {

            if (map.get(currentIndex)) {
                let currentNode = map.get(currentIndex);
                currentIndex = currentNode.next;

                return {
                    done: false,
                    value: currentNode.value
                };

            } else {

                return {
                    done: true
                }

            }

        }

    };
};*/

/*for (let value of map.entries())
    console.log(value);*/
