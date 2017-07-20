let instance = null;

class TimeStamp{  
    constructor(counter=0) {
        if(!instance){
            instance = this;
        }
        this.time = new Date();
        return instance;
    }
}

const timeStamp = new TimeStamp();


/**/
console.log(`started at ${timeStamp.time}`);
setTimeout(function(){
	const timeStamp = new TimeStamp();
	console.log(`started at ${timeStamp.time}`);
},3000);
