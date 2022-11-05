// Falsy JavaScript
console.log(Boolean(null))
console.log(Boolean({}))

// Case1. Memvalidasi inputan user ketika register
let username = ""
if(username){
    console.log('Data Lengkap')
}else{
    console.log('Data Tidak lengkap')
}

let username1 = "aswin"
if(username1){
    console.log('Data Lengkap')
}else{
    console.log('Data Tidak lengkap')
}

let cart = 0 
if(cart){
    console.log('Lanjut Checkout')
}else{
    console.log('Cart kosong')
}