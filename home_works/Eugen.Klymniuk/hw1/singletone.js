/**
 * Created by Eugen_EVK on 17-Jul-17.
 */
class MyModule {
	constructor () {
		this._state = {
			value: 0,
			counter: 0
		};
	}
	
	get state () { return  this._state; }
	
	add (val) {
		this._state.value += val;
		this._increment();
	}
	
	subtract (val) {
		this._state.value -= val;
		this._increment();
	}
	
	_increment () { this._state.counter++; }
	
}


module.exports = new MyModule();