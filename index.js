import {errorIfNotInteger} from "error-if-not-integer";


export function errorIfNotIntegerZeroOrGreater(num) {
    errorIfNotInteger(num);
    if (num < 0)  throw new Error('Input must be an integer not less than 0');
}
