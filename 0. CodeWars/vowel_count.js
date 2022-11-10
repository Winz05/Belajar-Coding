// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// Sample Test 
// const {assert} = require("chai");

// describe("Vowels Count Tests",function(){
//   it("should return 5 for 'abracadabra'",function(){
//     assert.strictEqual(getCount("abracadabra"), 5) ;
//   });
// });



function getCount(str) {
    let v = "aiueo"
    let result = 0
      for(let i = 0; i < str.length; i++){
        for(let j = 0; j < v.length; j++){
          if(str[i]===v[j]){
            result += 1
          }
        }
      }
    return result;
  }