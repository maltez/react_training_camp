// Not work!
console.log(a);
let a = 7;

// Not work!
let y = new A
class A{

}

const temp = { a : 1, b: 4 };
// Work
temp.a = 2;
temp.b = 'str';
temp.c = 'str';
// Not work
temp = {};

class B {
    constructor(){
        this.a = 12;
        // NEVER!!!!
        return 'str';
    }

    method(){

    }

    __method(){

    }
}

let i = 12;

class W {
    static methodStatic(){

    }

    [i](){

    }

    instanceMethod(){
        // Not work!
        this.methodStatic();
    }
}

const temporary = new W();
temporary[i];


class C extends B {
    constructor(){
        super();
    }

    [Symbol.iterator](){

    }

    method(){
        super.method();
    }
}

const name = 'Nick'
const age = 37;

const nickInfo = `Name: ${name} has age ${age}`

const symbol = Symbol('string');
const symbol1 = Symbol('string');


symbol === symbol1;