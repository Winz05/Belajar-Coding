let Product = ["Apel", "Mangga","Jeruk"]
let price = [10000, 15000, 20000]
let stock = [10, 15, 20]
let hargaBuah = "Purwadhika Mart \n"
for(let i = 0; i <= Product.length-1;i++){
hargaBuah += (`${i+1}. ${Product[i]} | Price: Rp.${price[i].toLocaleString()} | Stock: ${stock[i]} \n`)
}
console.log(hargaBuah)