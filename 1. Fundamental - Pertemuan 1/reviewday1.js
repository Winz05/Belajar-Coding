// Variable & Tipe Data
// CRUD (Create, Read, Update, Delete)
let phoneNumber // Nge-declare sebuah wadah/ membuat sebuah wadah
phoneNumber = "0812216421"

console.log(phoneNumber)

phoneNumber = "0812121214" // Update data yg sudah di Declare sehingga data dari row 4 tergantikan dengan data di row 8

phoneNumber = undefined // Men-Delete data yg sudah di Declare

var text = "Hello, World!"
var text = "Hai, Dunia!"
text = "Haiiiii!!!" // Menggantikan data di row 13 


// Conditional Statment
// Case. Buatlah program untuk menentukan nilai siswa, dengan ketentuan:
//          Nilai < 70 ---> tampilkan tidak lulus
//          Nilai < 80 ---> tampilkan lulus aja
//          Nilai < 100 ---> tampilkan lulus banget
let nilai = 90
if(nilai < 70){
    console.log("Tidak Lulus")
}else if(nilai < 80){
    console.log("Lulus Aja")
}else if(nilai < 100){
    console.log("Lulus Banget")
}else{
    console.log("Ya")
}

let BB = 100
if(BB<50){
    console.log("Kurus Banget")
}else if(BB<70){
    console.log("Kurus Aja")
}else if(BB<90){
    console.log("Cukup")
}else{
    console.log("Berlebih")
}
