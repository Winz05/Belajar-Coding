// Class 
// Digunakan untuk membuat sebuah object dengan nama key yang seragam 

class Products{
    name = "";
    price = 0;
    stock = 0;

    constructor(name, price, stock){
        this.name = name,           // this.name merujuk pada property yang ada di atas sedangkan name merujuk pada name di dalam function constructor
        this.price = price,
        this.stock = stock
    }
}

let product1 = new Products("Apel", 10000, 10)
let product2 = new Products("Mangga", 15000, 15)
console.log(product1)
console.log(product2)

let arrProduct = [
    new Products("Durian", 25000, 25),
    new Products("Semangka", 12000, 12)
]
console.log(arrProduct)

for(let i = 0; i < arrProduct.length; i++){
    console.log(`${arrProduct[i].name}`)
}


// Inheritance --> Pewarisan property 
// Buah 
// 1. Nama, Harga, Stok, Berat, Warna, Satuan
// Elektronik 
// 1. Nama, Harga , Stok, Berat, Warna, Satuan, Merk, Ukuran 
// Pakaian 
// 1. Nama, Harga, Stok, Warna, Ukuran, Merk, Bahan, Tipe

// Yang sama: Nama, Harga, Stok, Warna

class NewProduct{ // Parent
    nama = "";
    harga = 0;
    stok = 0;
    warna = "";

    constructor(nama, harga, stok, warna){
        this.nama = nama,
        this.harga = harga,
        this.stok = stok,
        this.warna = warna
    }
}

class Buah extends NewProduct{ // Child
    berat = 0;
    satuan = "";

    constructor(nama, harga, stok, berat, warna, satuan){
        super(nama, harga, stok, warna)
        this.berat = berat,
        this.satuan = satuan
    }
}

let buah1 = new Buah("Apel", 10000, 10, 1, "Merah", "Kg")
console.log(buah1)



// Elektronik 
// 1. Nama, Harga , Stok, Berat, Warna, Satuan, Merk, Ukuran 
class Elektronik extends NewProduct{ // Child
    berat = 0;
    satuan = "";
    merk = "";
    ukuran = 0;

    constructor(nama, harga, stok, warna, berat, satuan, merk, ukuran){
        super(nama, harga, stok, warna)
        this.berat = berat, 
        this.satuan = satuan,
        this.merk = merk,
        this.ukuran = ukuran
    }
}

let elektronik1 = new Elektronik("TV", 2000000, 5, "hitam", 2, "Kg", "Samsung", 21 )
console.log(elektronik1)

// Pakaian 
// 1. Nama, Harga, Stok, Warna, Ukuran, Merk, Bahan, Tipe
class Pakaian extends NewProduct{ //Child
    ukuran = 0;
    merk = "";
    bahan = "";
    tipe = "";
    constructor(nama, harga, stok, warna, ukuran, merk, bahan, tipe){
        super(nama, harga, stok, warna)
        this.ukuran = ukuran,
        this.merk = merk,
        this.bahan = bahan, 
        this.tipe = tipe
    }
}
let pakaian1 = new Pakaian("Jaket", 150000, 100, "Merah", "XL", "Dobujack", "Katun", "Hoodie")
console.log(pakaian1)

// Public & Private Property
class User{
    name = "";  // Public Property 
    #email = "";  // Private Property

    constructor(name, email){
        this.name = name
        this.#email = email
    }
}
let user1 = new User("Aswin", "aswin@gmail.com")
console.log(user1)



// Getter & Setter 
class User1{
    name = "";  // Public Property 
    #email = "";  // Private Property

    constructor(name){
        this.name = name
    }
    get getEmail(){  // Getter --> Untuk mengambil data khususnya data private atau data yang ingin dimodifikasi terlebih dahulu 
        if(this.#email.length !== 0){
            let modified = `****${this.#email.slice(4, this.#email.length)}`
            return modified
        }else{
            return "Email Tidak Ada"
        }
    }

    set saveEmail(email){
        if(!email.includes("@")){
            console.log("Email Tidak Valid")
        }else{
            this.#email = email
        }
    }
}
let user2 = new User1("Aswin")
user2.saveEmail = "aswin.05gmail.com"
console.log(user2)
console.log(user2.getEmail)


class User2{
    name = "";
    email = "";

    constructor(name){
        this.name = name
    }
}


