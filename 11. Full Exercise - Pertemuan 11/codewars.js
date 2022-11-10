// PR 
// Kerjakan 5 code challange di Codewars (bebas pilih)
// Kirim ke : muhammaddefryan@gmail.com
// Maksimal dikumpulkan besok jam 00:00

// Nomor 1
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;
console.log(name)

// Nomor 2
// You are given two interior angles (in degrees) of a triangle.
//Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
    let c = 0
      c = 180 - a -b
  return c;
}

// Nomor 3
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let result = ""
      result += s.repeat(n)
    return result;
  }

// Nomor 4
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

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

// Nomor 5
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return str.endsWith(ending)
  }
