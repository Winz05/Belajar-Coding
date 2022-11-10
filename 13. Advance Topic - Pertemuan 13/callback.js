// Case. Kita Memiliku Function Penjumlahan, 
// kemudian hasilnya kita tampilkan di dalam function lain 

function Output (data){
    return data*2
}

function Penjumlahan(num1, num2){ //1 --> num1, 2 --> num2
    return num1 + num2 // return 1+2 = 3
}

let result_penjumlahan = Penjumlahan(1,2) // 3
console.log(Output(result_penjumlahan))


// Callback Function 
// Function yang dijadikan argument oleh function lain 
// 1. Indirect Callback 
function Output1(data){ // 3 --> data
    return data*2 // 3 * 2 = 6
}

function Penjumlahan1(num1,num2,cb){ // 1 --> num1, 2 --> num2, Output1 --> cb
    return cb(num1+num2) // Output1(3)
}

console.log(Penjumlahan1(1,2,Output1))

// 2. Direct Callback 
function Penjumlahan2(num1,num2,cb){ // 1 --> num1, 2 --> num2, Output1 --> cb
    return cb(num1+num2) // Output1(3)
}

console.log(Penjumlahan2(1,2,function Output2(data){
    return data*2 
}))