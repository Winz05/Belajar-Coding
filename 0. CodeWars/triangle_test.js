// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//Sample Test 
// const { assert } = require("chai")

// describe("Public tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(isTriangle(1,2,2), true);
//     assert.strictEqual(isTriangle(7,2,2), false);
//   });
// })




function isTriangle(a,b,c)
{
  if (a <= 0 || b <= 0 || c <= 0)
          return false;
          
        if (a+b > c && a+c > b && c+b > a)
          return true;
        else
          return false;
}