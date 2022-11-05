// Exercise Nomer 1

let number = 9

for(let r = 1; r <= 10; r++){
    hasil = number * r;
   console.log(`${number} * ${r} = ${hasil}`)
}


// Exercise Nomer 2
let kata = "katak"
let kataBaru = ""
for(let i = kata.length-1; 0 <= i; i--){
  kataBaru += kata[i]
  
}if (kata == kataBaru){
  console.log("Palindrome")
}else{
  console.log("Not Palindrome")
}


// Exercise Nomer 3
const km = 1/100000
let cm = 500000
conv = cm * km
console.log(`Konversi dari ${cm} cm adalah ${conv} km`)


// Exercise Nomer 4
let idr = 10000000
console.log(`Saya memiliki uang di bank sebanyak Rp.${idr.toLocaleString()}`)


// Exercise Nomer 5 
let string = "Hello World!"
console.log(string.slice(1,4)) // Memotong kata dalam string


// Exercise Nomer 6
let low = "hello world"
console.log(low.toUpperCase()) // Mengcapslock kata dalam string

// Exercise Nomer 7
let rev = "bakso"
console.log(rev.split("").reverse().join(""))
