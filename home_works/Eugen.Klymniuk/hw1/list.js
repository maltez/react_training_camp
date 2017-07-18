/**
 * Created by Eugen_EVK on 17-Jul-17.
 */
const   LIST = [
	{ id: 1, data: 23, next: 7 },
	{ id: 2, data: 13, next: 3 },
	{ id: 3, data: 24, next: 9 },
	{ id: 4, data: 71, next: 6 },
	{ id: 5, data: 68, next: 4 },
	{ id: 6, data: 31, next: 8 },
	{ id: 7, data: 47, next: 5 },
	{ id: 8, data: 59, next: 2 },
	{ id: 9, data: 84, next: null },
];


class Iter {
	
	[Symbol.iterator] ()  {
		let current = LIST[0];
		
		return {
			next ()  {
				if (current) {
					let value = `id: ${current.id}   data: ${current.data}`;
					
					current = LIST.find( i => i.id === current.next );
					
					return { value, done: false };
				}
				
				return { done: true };
			}
		};
	}
}


for (let i of new Iter()) {
	console.log(i);
}