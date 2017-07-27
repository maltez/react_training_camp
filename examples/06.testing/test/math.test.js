import MathService from '../src/business_logic/math.service';
import { assert } from 'chai'; 

test('Test increment operation. Increment One -> Expect Two', ()=>{
    const result = MathService.increment(1);
    assert.equal(result, 2, 'Number is not incremented by one');
});

test('Test increment operation. Increment Two -> Expect Three', ()=>{
    const result = MathService.increment(2);
    assert.equal(result, 3, 'Number is not incremented by one');
});

test('Test increment operation. Try input string -> Expect error throw', ()=>{
    assert.throws(() => { MathService.increment('string') }, Error, 'Input parameter is not a number');
});

test('Test increment operation. Input one and set increment step 4 -> Expect 5', () => {
    const input = 1;
    const incrementStep = 4;

    const result = MathService.increment(input, incrementStep);

    assert.equal(result, 5, 'Number did not increment by 4');
});

test('Test increment operation. Input 10 -> Expect 10', () => {
    const result = MathService.increment(10);
    assert.equal(result, 10, 'Number 10 was incremented!');
});

test('Test decrement operation. Input 7 -> Expect 6', () => {
    const result = MathService.decrement(7);
    assert.equal(result, 6, 'Number 7 was not decremented!');
});

test('Test decrement operation. Input 0 -> Expect 0', () => {
    const result = MathService.decrement(0);
    assert.equal(result, 0, 'Number 0 was decremented!');
});

test('Test decrement operation. Try input string -> Expect error throw', ()=>{
    assert.throws(() => { MathService.decrement('string') }, Error, 'Input parameter is not a number');
});