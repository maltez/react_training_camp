/**
 * Created by Eugen_EVK on 18-Jul-17.
 */
const M = require('./singletone');

const   m = new M();

console.log('2 start:', m.state);

m.add(100);
m.subtract (30);

console.log('2 end:', m.state);