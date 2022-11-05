// Exercise Nomor 1

var low_Bilangan = []
var high_Bilangan = []
var average = []
function Lowest(angka){
    for(let i= 0; i <= angka.length-1; i++){
        if(angka[i] > angka[i+1]){
        high_Bilangan.push(`${angka[i]}`)
        }else{
        low_Bilangan.push(`${angka[i]}`)
        }
    } 
    console.log(`[${low_Bilangan},${high_Bilangan}] \nHighest [${high_Bilangan},${low_Bilangan}]`)

}
Lowest([40, 20, 30])

// Exercise Nomer 3
let splitString = (kata) => {
    console.log(kata.split(""))
}
splitString("Hello World")