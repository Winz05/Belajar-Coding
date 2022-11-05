// Function
// Sebuah baris program yang disimpan ke dalam suatu tempat 
// ....
// Tahapan membuat function: 
// 1. Build
// 2. Call 
// ....
// Syntax:
// 1. Function Declaration --> Bisa dipanggil sebelum function di build
print() // Hoisting
function print(){
    console.log("Hello, World!")
}

// 2. Function Expression --> Tidak bisa dipanggil sebelum function di build
let printProgram = function(){ // Anonymous function
    console.log("Ayam Goreng")
}
printProgram()

// Function with Parameter
function Output(text){  // text ---> Parameter
    console.log(text)
}

Output("Hello World!")
//...
//...
//...
Output("Hello Dunia!")

function Calculator(angka1, angka2){ // angka1, angka2 ---> Parameter
    console.log(angka1 + angka2)
}
Calculator(10, 20) // 10, 20 --> Argument 
//...
//...
//...
Calculator(80, 20) // 80, 20 --> Argument

function PrintDataDiri(nama, umur, hobi){
    console.log(`${nama}, ${umur}, ${hobi}`)
}

PrintDataDiri("Ryan", 17, "Main")

// 3. Arrow Function
let showProgram = () => { // Arrow function hanya berbeda dalam penulisan pada "=>"

}

// Function With Return 
// 1. Function yang hanya menjalankan sesuatu
// 2. Function yang menghasilkan sesuatu 

function Validation (phoneNumber){
    // Memvalidasi phone number agar inputan user murni angka semua
    if(phoneNumber.toString().length < 8 || phoneNumber.toString().length > 13){
        return false
    }else if(isNaN(phoneNumber)){
        return false
    }else{
        return true
    }
}

let result = Validation(087805667895)

if(result){
    console.log("Nomor sudah benar, registrasi sukses!")
}else{
    console.log("Nomor tidak valid, registrasi gagal!")
}
