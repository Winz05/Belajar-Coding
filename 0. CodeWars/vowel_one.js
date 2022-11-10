// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"


// Sample Test 
// const { assert } = require('chai');

// describe( "vowelOne" , () => {
//   it( "Sample tests", () => {
//    assert.strictEqual( vowelOne( "vowelOne" ), "01010101" );
//    assert.strictEqual( vowelOne( "123, arou" ), "000001011" );
//   })
// })




function vowelOne(s){
    let count = "";
   let arr = s.toLowerCase().split("")
   let vowels = ["a","e","i","o","u"]
   
 
   for (let i = 0; i < s.length; i++){
     if (vowels.includes(arr[i])){
       count += 1
     } else {
       count += 0
     }
   }
   return count
 }