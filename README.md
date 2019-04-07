# errorIfNotIntegerZeroOrGreater(arg): void

Triggers error if `arg` is not an integer of 0 or greater.   
Also errors if `arg` is not type 'number'.

## Examples
```
errorIfNotIntegerZeroOrGreater(0.55);
// Error: "Input must be an integer not less than 0"

errorIfNotIntegerZeroOrGreater(-2);
// Error: "Input must be an integer not less than 0"

errorIfNotIntegerZeroOrGreater('1');
// Error: "Input must be a finite number of type 'number' "
```


## Installation
`npm i  error-if-not-integer-zero-or-greater`

## Loading
```
// if using TypeScript:
import { errorIfNotIntegerZeroOrGreater} from 'error-if-not-integer-zero-or-greater';
// if using ES5 JavaScript:
var errorIfNotIntegerZeroOrGreater = 
     require('error-if-not-integer-zero-or-greater').errorIfNotIntegerZeroOrGreater;
```
