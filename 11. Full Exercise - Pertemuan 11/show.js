let product = [
    {id: 1, name: "Asus", price: 20000000, discount: 0},
    {id: 2, name: "Lenovo", price: 15000000, discount: 10},
    {id: 3, name: "Acer", price: 10000000, discount: 30},
    {id: 4, name: "Apple", price: 25000000, discount: 5},
    {id: 5, name: "Mi", price: 7500000, discount: 0}
]

let show_data = "Purwadhika Tech \n"

for(let i = 0; i < product.length-1;i++){
    if(product[i].discount !== 0){
        show_data += (`${product[i].id}. Jenis: ${product[i].name} Harga Awal: ${product[i].price.toLocaleString()} Harga Diskon: ${product[i].price - (product[i].price*product[i].discount/100)} \n`)
    }
}

console.log(show_data)