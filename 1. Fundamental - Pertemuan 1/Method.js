// String 
// 1. Length 
let text = "abcdefg"
console.log(text.length)
// 2. Slice ---> akan mengambil karakter dimulai dari 0 - 4 (Namun 4 tidak ikut)
console.log(text.slice(0, 4))
// Memotong dengan var. length
// 3. Substring ---> otomatis switch dan lebih fleksibel
console.log(text.substring(4, 0))
// 4. Replace 
console.log(text.replace('a', 'aaa'))
// 5. toUpper & toLower
console.log(text.toUpperCase())
console.log(text.toLowerCase())
// 6. Concat ---> Menggabungkan 2 variable yang memiliki tipe data string 
let text1 = "Hello"
let text2 = "World!"
let text3 = text1.concat(` ${text2}`)
console.log(text3)
// 7. IndexOf ---> Mencari posisi index dari suatu karakter 
console.log(text.indexOf('c'))
// Case1. Ingin mengubah 1 huruf menjadi uppercase
// Step1. Kita ambil 1 huruf yang diinginkan 
let newChar = text.slice(0, 1)
// Step2. Huruf yang diambil, kita ubah menjadi uppercase
let newCharToUppercase = newChar.toUpperCase()
console.log(newCharToUppercase)

// Number 
// 1. toString ---> Merubah number menjadi string 
let number = 123
console.log(number)
console.log(number.toString())

// Case1. Untuk mengambil angke ke-2 dari var number
// Step1. Kita ubah menjadi string
let numberToString = number.toString() // "123"
// Step2. Kita ambil karakter ke-2 dengan menggunakan method slice
let char2ofnumber = numberToString.slice(1, 2) // "2"
console.log(char2ofnumber)

let number1 = "abc123123"
console.log(Number(number1)) // Strict
console.log(parseInt (number1)) // Menyeleksi 

let number2 = "123abc"
console.log(Number(number2))
console.log(parseInt(number2))

let number3 = "324"
console.log(Number(number3))
console.log(parseInt(number3))
