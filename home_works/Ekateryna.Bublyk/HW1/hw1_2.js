const singleton = Symbol();
const singletonEnforcer = Symbol();

class SingletonEnforcer {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }

    this._type = 'SingletonEnforcer';
  }

  static get instance() {
    console.log(this[singleton]);
    if (!this[singleton]) {
      this[singleton] = new SingletonEnforcer(singletonEnforcer);
    }

    return this[singleton];
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }
}

export default SingletonEnforcer;

// another file
// import SingletonEnforcer from './SingletonEnforcer';
// Instance
// const instance3 = SingletonEnforcer.instance;
