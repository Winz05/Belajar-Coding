// Mutable & Immutable 
// Mutable: sebuah tipe data yang valuenya dapat diubah ketika di copy (array & object)
let arr1 = [1, 2, 3] // index dimulai dari angka 0 bukan 1
let newArr1 = arr1
newArr1 [0] = 100 // 1 ---> 100
console.log (newArr1)
console.log(arr1)

// Immutable: sebuah tipe data yang valuenya tidak dapat diubah ketika di copy (string, number, dll)
let nama = "Aswin"
let newNama = nama // "Aswin"
newNama = "Aswin Wibowo"
console.log(nama)
console.log(newNama)