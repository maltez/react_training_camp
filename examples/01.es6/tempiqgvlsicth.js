class Generator {

    constructor(n){
        this.n = n;
    }

    [Symbol.iterator](){
            let i = 0;
            return {
                next(){
                    const done = (i < this.n );
                    const value = i++;

                    return { done, value };
                }
            }
        }
}

var gen = new Generator(3);
for(let n of gen){
    
}