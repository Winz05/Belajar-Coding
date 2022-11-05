// Continue Function 
function Greeting(name){ // Declaration Function 
    const hello = "Hello"

    console.log(`${hello}, ${name}`)
}

Greeting("Aswin")   // Arrow Function (Sering Digunakan)
let greeting1 = (name) => {
    const hello = "Hello"

    console.log(`${hello}, ${name}`)
}
 greeting1("Nathan")

 // Function With Default Parameter 
let greeting2 = (name = "Username") => {
    console.log(`Hai, ${name}!`)
}
greeting2() // Hai, Username!
greeting2("Pamela") // Hai, Pamela

// Rest Parameter 
let myfunction = (a,b, ...manyMore) => {
    console.log(a)
    console.log(b)
    console.log(manyMore)
    console.log(manyMore[0] + manyMore[1])
}
myfunction("Nasi", "Air", "Teh", "Kopi")

let arrTigaDimensi = [["Purwadhika", ["Digital", "School"]], 1, true, false] // Array 3 Dimensi
console.log(arrTigaDimensi[0][1][0])
console.log(arrTigaDimensi[0][0])
console.log(arrTigaDimensi[0][1][1])
console.log(arrTigaDimensi[2])


// Nested Function
let mutia = () => {
    let tito = () => {
        console.log("TIto")
    }
    tito()
    console.log("Mutia")
}
mutia()

// Closure Function 
// Inner Function yang dapat mengakses variabel dari outer functionnya 
let greeting = () => {
    let name = "Ryan"

    let cetak = () => {
        console.log(`Hello, ${name}`)
    }
    cetak()
}
greeting()

// Recursive Function 
let countDown = (num) => {
    console.log(num)

    num--
    if(num > 0){
        countDown(num)
    }
}

countDown(3)