// Tarif Toll 

// Step1. Tentukan Tarif Toll

let tarif_toll = [
    { id: 1, name: "jkt", tarif: 100000 },
    { id: 2, name: "crbn", tarif: 150000 },
    { id: 3, name: "smg", tarif: 200000 },
    { id: 4, name: "jmbg", tarif: 250000 },
    { id: 5, name: "sby", tarif: 300000 },
]

let start = 5
let tujuan = 3
let temp = 0
let result = []


function Tarif(a, b) {
    if (start > tujuan) {
        b = a
        temp = tujuan
        a = temp
        console.log(b)
        console.log(temp)
        console.log(a)

    }
    for (let i = a - 1; i < b; i++) {
        result.push(tarif_toll[i].tarif)
       
    }

    return result.reduce((a, b) => (a + b))
}

console.log(Tarif(start, tujuan))