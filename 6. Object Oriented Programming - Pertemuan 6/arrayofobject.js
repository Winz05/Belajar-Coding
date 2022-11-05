let products = [
    {name: "Apel", price: 10000, stock: 10},
    {name: "Jeruk", price: 15000, stock: 15},
    {name: "Mangga", price: 20000, stock: 20}
]
console.log(products[0])
console.log(products[1])
console.log(products[2])
console.log(products[3])
for(let i = 0; i <products.length; i++){
    console.log(products[i])
}

for(let i = 0; i <products.length; i++){
    console.log(products[i].name)
}

let products1 = [
    {name: "Apel", price: 10000, stock: 10},
    {name: "Jeruk", price: 15000, stock: 15},
    {name: "Mangga", price: 20000, stock: 20}
]

let jualan = "Purwadhika Mart \n"
for(let i = 0; i <products1.length; i++){
    jualan += (`${products1[i].name} - Price: Rp ${products1[i].price.toLocaleString()} - Stock: ${products1[i].stock} \n`)
}
console.log(jualan)

