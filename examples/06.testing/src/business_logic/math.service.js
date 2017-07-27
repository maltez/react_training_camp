const MathService =  {
    increment (num, incrementStep = 1) {
        if (typeof num !== 'number'){
            throw new Error('Input parameter is not a number');
        }
        
        const result = num + incrementStep;

        return result <= 10 ? result : 10;
    },
    decrement (num, incrementStep = 1) {
        if (typeof num !== 'number'){
            throw new Error('Input parameter is not a number');
        }

        const res = num - incrementStep;
        return res > 0 ? res : 0;
    },
};

export default MathService;
