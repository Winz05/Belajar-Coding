// Exercise Nomer 1 

let TempCelcius = 90
let TempFahrenheit = (TempCelcius * 9 /5) + 32
console.log(`Jadi ${TempCelcius} Derajat Celcius adalah ${TempFahrenheit} Derajat Fahrenhei`)

// Exercise Nomer 2
let b = 9
if(b % 2 == 0){
    console.log("Merupakan Bilangan Genap")
}else{
    console.log("Merupakan Bilangan Ganjil")
}

// Exercise Nomer 3
let number = 7
for(let i=2; i <= number-1; i++){
    if(number % i === 0){
        console.log("Not Prime")
        break;
    }
    if(i === number-1){
        console.log("Is Prime")
    }
}

// Exercise Nomer 4
let n = 8
let sum = 0
for(let a =1; a <= n; a++){
    sum += a; // 0+1 
} 
console.log(`Suku Ke-n dari ${n} adalah ${sum}`)

// Exercise Nomer 5
let c = 8
let faktorial = 1
for(let d = 1; d <= c; d++){
    faktorial *= d;
} 
console.log(`Faktorial dari ${c} adalah ${faktorial}`)

// Exercise Nomer 6
let fibo = "011"
let e = 5
for(let f = 3; f < e; f++){ // 3 < 5 True ---> 4 < 5 True ---> 5 < 5 False
    fibo += Number(fibo[f-1]) + Number (fibo [f-2]) // 3 < 5 True --> fibo += Number(fibo[3-1]) + Number (fibo [3-2])
                                                    // 4 < 5 True --> fibo += Number(fibo[4-1]) + Number (fibo [4-2])
} console.log(fibo)
