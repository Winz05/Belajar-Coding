// Exercise Nomer 1
let Triangle = (n) => {
    let string = "";
    let count = 1
    for(let i=1;i <= n; i++){
        for(let j = 1;j <= i; j++){
            string += count
            count++
        }
        string += "\n"
    }
    console.log(string);
}


Triangle(4)


// Exercise Nomer 2
let FizzBuzz = (n) => {
    for(let i = 1; i <= n; i++){
        console.log(i)
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else if(i%5 == 0){
            console.log("Buzz")
        }else if(i%3 == 0){
            console.log("Fizz")
        }
    }
}
FizzBuzz (10)

// Soal Latihan Nomer 2
let JumlahDeret = (n) => {
    let jumlahDeret = 0
    for(let i = 1; i<=n; i++){
        if(i%3 == 0 || i%5 == 0){
            jumlahDeret += i
        } 
    }
    console.log(jumlahDeret)


// Exercis Nomor 3
function BMI (weight, height){
    // Step1. Cari rumus
    let bmi = weight / Math.pow ((height/100), 2)
    // Step2. Conditional Statment 
    // < 18.5 ---> Less Weight 
    // < 24.9 ---> Ideal 
    // < 29.9 ---> Overweight 
    // < 39.9 ---> Very Overweight
    // >= 39.9 ---> Obesitas
    if(bmi < 18.5){
        return "Less Weight"
    }else if(bmi < 24.9){
        return "Ideal"
    }else if(bmi < 29.9){
        return "Overweight"
    }else if(bmi < 39.9){
        return "Very Overweight"
    }else if(bmi >= 39.9){
        return "Obesitas"
    }
}
console.log(BMI(80, 150))

}
JumlahDeret(15)
// Exercise Nomor 4
let Result = (num) => {
    var evenNumber = []
    var oddNumber = []
    for( let i = 0; i < num.length; i++){
        if(num[i]%2 == 0){
            evenNumber.push(num[i])
        }else{
            oddNumber.push(num[i])
        }
    }
    console.log(evenNumber)
} 
Result([1, 2, 3, 4, 5, 6, 7, 8])

// Exercise Nomor 5
let Split = (kata) => {
    let splitResult = kata.split(" ")
    console.log(splitResult)
}
Split("Hello World")
// Soal Latihan Seperti Nomor 5
let Split1 = (kata) => {
    let splitResult1 = kata.split(" ").join(", ")
    console.log(splitResult1)
}
Split1("Aswin Bahtiar Iqbal")
