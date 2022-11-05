class Products{
    name = "";
    price = 0;

    constructor(name, price){
        this.name = name,           
        this.price = price
    }
}

let product1 = new Products("Shampo", 10000)

class Transaction{
    total = 0;
    product = "";

    Cart(){

    }
    constructor(total, product){
    this.total = total,
    this.product = product
    
    
    }
}

let transaction1 = new Transaction(1,"Pantene")


class ProductData extends Products{
    total = 0;
    product = "";

    
}


let productData = {
    name: "Shampo",
    price: 10000,
    total: 1,
    product: "Pantene",
    Cart() { 
        console.log(this.name)
        console.log(this.price)
        console.log(this.total)
        console.log(this.product)
        }
    }
productData.Cart()



