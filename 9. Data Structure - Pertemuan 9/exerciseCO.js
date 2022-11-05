let product = [
    {id: 1, name: "Apel", price: 10000, stock: 10},
    {id: 2, name: "Jeruk", price: 15000, stock: 15},
    {id: 3, name: "Semangka", price: 20000, stock: 20}
   ]
    
    let daftarBuah = "Purwadhika Mart \n"
    for(let i = 0; i <= product.length-1;i++){
    daftarBuah += (`${product[i].id}. ${product[i].name} - Price: Rp. ${product[i].price.toLocaleString()} - Stock: ${product[i].stock} \n`) 
}
alert(`Welcome To PurwaDhika`)

    let nomorBuah = parseInt(prompt(`${daftarBuah} 

Silahkan Pilih Nomor Product yang ingin Dibeli: `))
    while(isNaN(nomorBuah) || nomorBuah < 1 || nomorBuah > 3){
        alert(`Invalid!, Silahkan Input Ulang`)
    nomorBuah = parseInt(prompt(`${daftarBuah} 

Silahkan Masukan Kembali Nomor Product yang ingin Dibeli: `))
   }
   let nmrBuah = product[nomorBuah-1].stock

   let quantity = parseInt(prompt(`Silahkan Masukkan Quantity Product yang ingin Dibeli: `))
   while(isNaN(quantity) || quantity < 1 || quantity > nmrBuah){
        alert(`Invalid!, Silahkan Input Ulang`)
    quantity = parseInt(prompt(`Silahkan Masukkan Kembali Quantity Product yang ingin Dibeli: `))
   }
   alert (`Product Berhasil Dimasukkan Kedalam Keranjang Belanja Anda`)
   let cart = ""
   cart += (`${product[nomorBuah-1].name} - Price: Rp. ${product[nomorBuah-1].price} x ${quantity}`)
   alert(`Keranjang Belanjaan Anda Saat ini:
   
   ${cart}`)