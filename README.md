# jsranger
## Concept
A function to create a list inspired by Python range() function

## Install
```npm install jsrange```

## Example
```
var jsranger = require('jsranger');

var L = jsranger(2, 20);
console.log(L);
  // should display the following
  // [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]

var l = jsranger(2, 20, 2);
console.log(l);
  // should display the following
  // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
```
