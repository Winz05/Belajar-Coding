// Latihan Looping
// Data Input
let input = [1,5,100,-10,0,-30]
let result = 0
function Menghitung(data){
    for(let i = 0; i < data.length;i++){
        if(data[i] >= 0 ){
            result += data[i]
        }
    }
    return result

}

console.log(Menghitung(input)) // [index]


// Sum Number only 
// Data Input 
let data = [1, "abc", 100, -10, 0, -30]
let hasil = 0
function Jumlah(arr){
    for(let i = 0; i < arr.length; i++){
        if(!(isNaN(arr[i]))){
            hasil += arr[i]
        }
    }
    return hasil
}

console.log(Jumlah(data))

// Find Multiple 5
// Data Input 
let num = [1, 3, 10, 5, 100, 2, 8, 6]
let hasil_num = []
function Multiple(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%5 === 0){
            hasil_num.push(arr[i])
        }
    }
    return hasil_num
}

console.log(Multiple(num))


// Find Total Space
// Data Input 
// Output "3 Space"
let kata = "Jangan-jangan kamu adalah aku!"
let hasil_kata = 0

function Space(word){
    for(let i = 0; i < word.length; i++){
        if(word[i]==" "){
            hasil_kata += 1
        }
    }
        hasil_kata += "Space"
    return hasil_kata
}

console.log(Space(kata))

// Four Chars
// Create a function to Validate Total Character of string. Total Character must be < 10 
// Argument1 = "abc" ==> True
// Argument2 = "purwadhikadigitalschool" ==> return False
// Argument3 = "" ==> return False


let argument1 = "abc"
let argument2 = "purwadhikadigitalschool"
let argument3 = ""

function Validasi_Kata(arg){
    if(arg.length <= 0 || arg.length >= 10){
        return false
    }else{
        return true
    }

}
console.log(Validasi_Kata(argument1))
console.log(Validasi_Kata(argument2))
console.log(Validasi_Kata(argument3))

// Remove "a" (Create with Function and Looping)
// Argument1 = "purwadhika" --> return "purwdhik"
// Argument2 = "hello" --> return "hello"
// Argument3 = "hai" --> return "hi"

let argu1 = "purwadhika"
let argu2 = "hello"
let argu3 = "hai"
function Remove_a(huruf){
    let result1 = ""
    for(let i = 0; i < huruf.length; i++){
        if(huruf[i] !== "a"){
            result1 += huruf[i]
        }
    }
    return result1
}

console.log(Remove_a(argu1))
console.log(Remove_a(argu2))
console.log(Remove_a(argu3))