const GetFactorial = {
	getFactorial(num) {
		if (typeof num !== 'number'){
			throw new Error('Input parameter is not a number');
		} else if (num <= 0){
			throw new Error('Input parameter could not be negative');
		} else if (num >= 21) {
			throw new Error('Input parameter could not be more then 20');
		}

		return (num != 1) ? num * this.getFactorial(num - 1) : 1;
	}
};

export default GetFactorial;