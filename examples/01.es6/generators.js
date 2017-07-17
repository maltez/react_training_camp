function* generator (n){
    console.log(`Entered ${n}`);
    n = yield (n);
    console.log(`re-entered ${n}`);
    n = yield (n);
    console.log(`re-entered ${n}`);
    return n
}

let temp = generator(1);
console.log(temp.next());
console.log(temp.next(100));
console.log(temp.next(200));
console.log(temp.next());