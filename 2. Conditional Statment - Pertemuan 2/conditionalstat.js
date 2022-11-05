// if
// if(condition){ Apabila kondisinya bernilai True maka akan dijalankan
// ...
// }
let age = 21
if(age > 17){ // True
    console.log('Register Success')
}else if ( age > 10){
    console.log('Remaja')
}else if (age < 5){
    console.log('Balita')
}

let umur = 16
if(umur > 17){
    console.log('Register Success')
}


// if - else
// if (Condition) {Apabila kondisinya bernilai True
// ...
// } else { Action default apabila kondisi pertama gagal/bernilai False
// ...
// } 
let ageuser = 24 
if(ageuser > 17){
    console.log("Register Succcess") 
} else{
    console.log("Register Failed!")
}
let umuruser = 12
if(umuruser > 17){
    console.log('Register Success')
} else{
    console.log('Register Failed!')
}


// Chaining Condition
// if - else if - else if - ... - else
// if(condition){ Apabila kondisinya bernilai True maka akan dijalankan
// ...
// } else { Action default apabila kondisi pertama gagal/bernilai False
// ...
// } else
let nilai = 100
if(nilai < 80){
    console.log('Remedial')
} else if (nilai <= 90){
    console.log('Lulus')
} else {
    console.log('Lulus dengan Nilai yang baik')
}


// Nested if ---> if di dalam if
let point = 10 
if(point > 0){
    if(point < 30){
        console.log('Point Sedikit')

        }else{
            console.log('Point Banyak')
        }
    }else{
    console.log('Point Kosong')
}

let point1 = 50
if(point1 > 0){
    if(point1 < 30){
        console.log('Point Sedikit')

        }else{
            console.log('Point Banyak')
        }
    }else{
    console.log('Point Kosong')
}

let point2 = "-3"
if(point2 >= 0){
    if(point2 < 30){
        console.log('Point Sedikit')

        }else{
            console.log('Point Banyak')
        }
    }else{
    if(point2 > -10){
        console.log('Point Minus')
    }
}

