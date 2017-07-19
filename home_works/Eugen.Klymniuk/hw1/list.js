/**
 * Created by Eugen_EVK on 18-Jul-17.
 */
class List {
	constructor () {
		this._first = null;
		this._length = 0;
	}
	
	get first () { return this._first; }
	get length () { return this._length; }

	
	add (val) {
		const   el = { data: val, next: null };
		const   iter = this[Symbol.iterator]();
		let current, last;

		if (!this._first) {
			this._first = el;
		} else {
			last = this.first;
			
			do {
				current = iter.next();
				if (current.value) {
					last = current.value;
				}
			} while (!current.done);

			last.next = el;
		}

		this._length++;
	}
	
	
	[Symbol.iterator] ()  {
		let current = this.first;
		
		return {
			next ()  {
				if (current) {
					const value = current;
					
					current = current.next;
					
					return { value, done: false };
				}
				
				return { done: true };
			}
		};
	}

}

const list = new List();

let len = 10;


while (len) {
	list.add(len--);
}

for (let i of list) {
	console.log(`Value: ${i.data}`);
}