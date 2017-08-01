import MathService from '../src/math_logic/math.service';
import { assert } from 'chai';

test('Test increment operation. Increment One -> Expected Two', () => {
    const result = MathService.increment({ count: 1, number: 1});
    assert.equal(result.count, 2, 'Number is not incremented by one');
    assert.equal(result.number, 2, 'Number is not incremented by one');
});
test('Test increment operation. Increment Two -> Expected Three', () => {
    const result = MathService.decrement({ count: 2, number: 2});
    assert.equal(result.count, 1, 'Number is not incremented by one');
    assert.equal(result.number, 1, 'Number is not incremented by one');
});
test('Test increment operation. Increment Two -> Expected Three', () => {
    const result = MathService.decrement({ count: 1, number: 1});
    assert.equal(result.count, 1, 'Number is not incremented by one');
    assert.equal(result.number, 1, 'Number is not incremented by one');
});
