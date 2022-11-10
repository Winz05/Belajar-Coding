// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


// Sample Test 
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {         
//     assert.strictEqual(getSum(0,-1),-1);
//     assert.strictEqual(getSum(0,1),1);
//   })
// });




function getSum( a,b )
{
var startindex = a > b ? b : a;
var endindex = a > b ? a : b;

var result = 0;
for(var i = startindex; i <=  endindex; i++) {
result = result + i;
}
return result;
}