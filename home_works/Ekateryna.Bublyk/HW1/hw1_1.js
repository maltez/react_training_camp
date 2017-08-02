class List {
	constructor () {
		this._list = null;
		this._length = 0;
	}

	add (val) {
		let list =  null;

		do {
			list = Object.assign({}, {data: val, next: list});
			val--;
		} while (val);

		this._list = list;
	}

	[Symbol.iterator] ()  {
		let list = this._list;
		return {
			next ()  {
				if (list) {
					const value = list;

					list = list.next;

					return { value, done: false };
				}

				return { done: true };
			}
		};
	}
}


const list = new List();

let len = 27;
list.add(len);

for (let i of list) {
	console.log(`Value: ${i.data}`);
}