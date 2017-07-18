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
		let  el = { value: val, next: null },
		     first = this.first,
			 last = first;
		
		if (first) {
			while (last.next) {
				last = last.next;
			}
			last.next = el;
		} else {
			this._first = el;
		}
		
		this._length++;
		
		return  el;
	}
	
	[Symbol.iterator] ()  {
		let current = this.first;
		
		return {
			next ()  {
				if (current) {
					let value = `value: ${current.value}`;
					
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
	console.log(i);
}