import GetFactorial from '../src/business_logic/GetFactorial';
import { assert } from 'chai';

test('Test increment operation. Increment One -> Expect One', ()=>{
	const result = GetFactorial.getFactorial(1);
	assert.equal(result, 1, 'Number is not incremented by one');
});

test('Test increment operation. Try input string -> Expect error throw', () => {
	assert.throws(() => { GetFactorial.getFactorial('string') }, Error, 'Input parameter is not a number');
});

test('Test increment operation. Try input 0 -> Expect error throw', ()=>{
	assert.throws(() => { GetFactorial.getFactorial(0) }, Error, 'Input parameter could not be negative');
});

test('Test increment operation. Try input 21 -> Expect error throw', ()=>{
	assert.throws(() => { GetFactorial.getFactorial(21) }, Error, 'Input parameter could not be more then 20');
});