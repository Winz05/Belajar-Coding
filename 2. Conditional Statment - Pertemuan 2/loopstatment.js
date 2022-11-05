// Loop Statment 
// While 
// While(Condition){
// ...
// }

let init = 1
while(init < 3){ //1 < 3? True ---> 2 < 3? True ---> 3 < 3? False
    console.log("Pizza") //1x ---> 2x
    init++ // 1 ---> 2 ---> 3 --->
}

// Do While
let init1 = 1
do{ 
    console.log("Ayam Goreng") // 1x ---> 2x 
    init1++ // 1 ---> 2 ---> 3
}while(init1 < 3) // 2 < 3? True ---> 3 < 3? False

// While X Do While 
// While : Ketika pertama kali program dijalankan, dia akan cek kondisi terlebih dahulu
// Do While: Akan jalan 1x ketika pertama kali program dijalankan

// For Loop
for(let i=1; i <= 5; i++){ // 1 <= 5? True ---> 2 <= 5? True ---> 3 <= 5? True .... 5 <= 5? True ---> 6 <= 5? False 
    console.log(i) // 1 ---> 2 ---> 3 ---> 4 ---> 5 // Di consol log dulu baru ditambahkan
}

// Break & Continue
// Break ---> Digunakan untuk menghentikan Looping
// Continue ---> Digunakan untuk Men-skip code program dibawahnya 

// Case. Saya ingin mengecek value inputan dari user. 
//      Apabila valuenya mengandung huruf, maka langsung munculin error 
let nomorHp = "081abc"
for(let i=0; i < nomorHp.length; i++){ // 0 < 6? True ---> 1 < 6? True ---> 2 < 6? True ---> 3 < 6? True
    if(isNaN (nomorHp[i])){ // nomorHp[0] = isNaN? False ---> nomorHp[1] = isNaN? False ---> nomorHp[2] = isNaN? False ---> nomorHp[3] = isNaN? True
    console.log("Inputan Eror") // isNaN: Apakah hasilnya bukan Number
    break;
    }
    console.log(nomorHp[i]) // 0 ---> 8 ---> 1
}

for(let i=1; i <= 5; i++){
    console.log(i)// 1 ---> 2 ---> 3
    if(i === 3){
        break;
    }
}

for(let I=1; I<6; I++){ // 1<6 ? True ---> 2<6? True ---> 3<6? True
    if(I === 3){ // 1 === 3? False ---> 2 === 3? False ---> 3 === 3? True
        continue
    }
    console.log(I)
}