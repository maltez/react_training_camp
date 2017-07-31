const MathService = {
    increment (num) {
        num.number += 1;
        num.count = num.count*num.number;
        return num;
    },
    decrement (num) {
        if(num.number === 1){
            return num;
        }
        num.count = num.count/num.number;
        num.number -= 1;
        return num;
    },
}
export default MathService;