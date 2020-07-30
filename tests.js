import {errorIfNotIntegerZeroOrGreater} from './index.js';


errorIfNotIntegerZeroOrGreater(1);
console.log('test 1 passed');

let errMessage = '';

try{
	errorIfNotIntegerZeroOrGreater(0.55);
}
catch (e) {
	errMessage = e.message;
}
if (errMessage === "Input must be integer") console.log('test 2 passed');
else console.log('test 2 FAILED');

//
// Error: "Input must be an integer not less than 0"
errMessage = '';
try{
	errorIfNotIntegerZeroOrGreater(-2);
}
catch (e) {
	errMessage = e.message;
}
if (errMessage === "Input must be an integer not less than 0") console.log('test 3 passed');
else console.log('test 3 FAILED');


errMessage = '';
try{
	errorIfNotIntegerZeroOrGreater('1');
}
catch (e) {
	errMessage = e.message;
}
if (errMessage === "Input must be a finite number of type 'number'") console.log('test 4 passed');
else console.log('test 4 FAILED');
