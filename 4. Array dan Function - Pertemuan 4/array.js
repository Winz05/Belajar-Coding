// Array 
// Memiliki index penomoran untuk masing-masing data
let student1 = "Stephen"
let student2 = "Ashfi"
let student3 = "Aswin"
let student4 = "Nathan"
let student5 = "Tito"

student1 = "Gilang"

//CRUD : Create, Read, Update dan Delete
let students = ["Stephen", "Ashfi", "Aswin", "Natahan", "Tito"]

console.log(students[0])

students[0] = "Gilang"

delete students [0]

console.log(students)

// Method
let hewan = ["Kucing", "Anjing", "Gajah"]
// 1. Push --> Digunakan untuk menambahkan data baru di dalam array
//             dan di simpan setelah index paling terakhir 
hewan.push("jerapah")
hewan.push("semut", "burung")
console.log(hewan)


// 2. Unshift --> Digunakan untuk menambahkan data baru sebelum index paling awal 
hewan.unshift("laba-laba")
hewan.unshift("harimau", "buaya")
console.log(hewan)

// 3. Pop --> Digunakan untuk nge-delete data di index paling akhir
hewan.pop()
hewan.pop()
console.log(hewan)

// 4. Shift --> Digunakan untuk nge-delete data di index paling awal
hewan.shift()
console.log(hewan)

// 5. Splice --> (index, totalDataToDelete, dataToInsert)
let makanan = ["bakso", "bakwan", "martabak", "seblak","nasi padang"]
// makanan.splice(1, 2) // 1 --> nomor Index 2 --> Jumlah yang di delete
// makanan.splice(2, 2, "boba", "Ayam Goreng")
makanan.splice(1, 0, "makanan baru") //Menambahkan data sebelum index
console.log(makanan)


// Add data manual x Add data Splice
let campus =["BSD", "Jakarta", "Batam"]
campus.slice(10, 0, "jogja") //Menambahkan pada akhir index (Strick)
campus[12] = "Bandung" // Menambahkan sesuai index dan index yg lain menjadi empty 
campus[9] = "Surabaya"
console.log(campus)

// 6. Slice --> (StartIndex, EndIndex) --> EndIndex tidak ikut diambil
let huruf = ["A", "B", "C", "D", "E"] 
huruf = huruf.slice(0,3) // A, B, C
console.log(huruf)

// 7. Includes & IndexOf
// Includes --> Digunakan untuk mencari data 
// IndexOf --> Digunakan untuk mencari posisi dari data kita berada di index ke berapa 
let minuman = ["Air", "Jus", "Teh", "Kopi", "Susu"]
console.log(minuman.includes("Jus"))  // Hasilnya akan Boolean yaitu True or False
console.log(minuman.includes("teh"))
console.log(minuman.includes("aerrr"))
console.log(minuman.includes("Teh"))

console.log(minuman.indexOf("Susu"))

// 8. Concat --> Untuk menambahkan 2 buat array menjadi 1
let arr1 = ["1", "2", "3"]
let arr2 = ["4", "5", "6"]
console.log(arr1.concat(arr2))


// 9. Split--> Memisahkan dari string ke array 
let world = "Hello, Purwadhika!"
console.log(world.split(" "))
console.log(world.split(""))
console.log(world.split("l"))

