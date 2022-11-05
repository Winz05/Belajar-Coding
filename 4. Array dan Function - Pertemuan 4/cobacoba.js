let Product = ["Apel", "Mangga","Jeruk"]
let price = [10000, 15000, 20000]
let hargaBuah = "Purwadhika Mart \n"
for(let i = 0; i <= Product.length-1;i++){
    hargaBuah += (`${Product[i]} = Rp.${price[i].toLocaleString()} \n`)
    }
        console.log(hargaBuah)
       