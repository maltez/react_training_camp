/**
 * Created by Eugen_EVK on 18-Jul-17.
 */
const M = require('./singletone');

const   m = new M();

console.log('1 start:', m.state);

m.add(10);
m.subtract (3);

console.log('1 end:', m.state);