// untuk memblok kata yang sama ctrl + d
// untuk mengcopy ke bawah shift + alt + up atau shift + alt + down 


console.log("Hello, World!");
console.log("Hello, Purwadhika!")

// Variable Declaration
var makanan // Declare variable 
makanan = "Pizza" // Assign Value
console.log(makanan)

var hewan = "Kucing" // Declare dam assign secara bersamaan 
console.log(hewan) 
console.log(hewan)
console.log(hewan)
console.log(hewan)
console.log(hewan)
console.log(hewan)
console.log(hewan)
console.log(hewan)
console.log(hewan)
console.log(hewan)
console.log(hewan)

// Var x Let x Const
// Var ---> Diperbolehkan membuat variable dengan nama yang sama 
//     ---> Tidak Mengenal scope 

// Let ---> Tidak diperbolehkan membuat variable dengan nama yang sama 
//     ---> Mengenal scope 

// Const ---> Mirip dengan Let, hanya saja valuenya constant

let makanan1 = "Burger"
let makanan2 = "KFC"
let makanan3 = "MCD"
// ...
// ...
// ...
console.log(makanan1)
console.log(makanan2)
console.log(makanan3)
// ...
// ...
// ...

// Variable Rules
// 1. Penamaan variable harus spesifik
let namastadion = "Bung Karno"

// 2. Karakter pertama: huruf, $, _ (underscore)
let nama_pahlawan 

// 3. Syntax JavaScript tidak diperbolehkan dalam penamaannya 

// 4. Apabila nama variable lebih dari 1 kata, hanya bisa dihubungkan dengan _ atau memggunakan camelCase 
let namaBinatang = "Gajah" // Contoh menggunakan camelCase
let nama_hewan = "Elang" // Contoh menggunakan _

// 5. Case sensitive
let namaHewan = "Kucing" 
let namahewan = "Anjing"

let namabuah = "Jeruk"
let namaBuah_ = "Anggur"

let namamakanan = "Coklat"
namamakanan = "Keju" // Update dari namamakanan 
console.log (namamakanan)




// Tipe Data : String 
// Semua yang diapit dengan "..." / '...' / `...`
let namaStudent = "Aswin"
console.log(typeof namaStudent)

let namaDepan = "Winz"
let description = "Nama saya adalah " + namaDepan + "."
let description1 = `Nama saya adalah ${namaDepan}.` // String Literal 
console.log (description1)
console.log (description)
// Tipe data number 
let discount = 10 // integer 
let discount1 = 10.05 // float
console.log(typeof discount)

// Tipe data Boolean 
// Tipe data yang memiliki value true/false
let isTrue = true
let isFalse = false
console.log (typeof isTrue)
console.log (typeof isFalse)

// Const. Tipe Data: Number 
// Modulus ---> Hasil sisa bagi 
console.log(10%3) // 1
console.log (15%3) // 0
console.log (20%3) // 2

// Operator: + 
let angka1 = 1
let angka2 = 1
let angka3 = "1" // Apabila string maka ditambahkan di belakang 
console.log(angka1 + angka2 + angka3)

// Contoh Operator +
let angka4 = 5
let angka5 = 7
let angka6 = "Winz"
console.log(angka4 + angka5 + angka6)

let n =10 
n += 10 
console.log(`n ${n}`)

let counter = 1
counter++ // Increment
counter++ // Counter += 1
counter-- // Decrement 

// Tipe Data: Date
let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())

// Prefix: Akan mendapatkan value setelahnya 
let counter1 = 0
console.log(++counter1)
// Postfix : Akan mendapatkan value sebelumnya 
let counter2 = 10 
console.log(counter2++) // Show: 10 - Real: 11
counter2++ // Real 12
console.log(counter2++) // Show : 12 - Real: 13
counter2++ // Real 14
console.log(counter2++) // Show : 14 - Real : 15
console.log(counter2)