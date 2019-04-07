let errorIfNotObject = require('./index').errorIfNotObject;

errorIfNotObject({}); // no error.
errorIfNotObject([]); // no error.

let str = new String('string');
errorIfNotObject(str);
console.log(str);
console.log('passed');

errorIfNotObject(null); // Error: "Input must be object"
