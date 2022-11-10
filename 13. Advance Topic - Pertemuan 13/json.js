let products = {
    name: "Umbrella",
    price: 12500,
    variant: [
        {
            color: "Purple"
        },
        {
            color: "Blue"
        }
    ]

}

let saveJSON = JSON.stringify(products)
console.log(saveJSON)
saveJSON = JSON.parse(saveJSON)
console.log(saveJSON.name)
console.log(saveJSON)