// Tarif Parkir
// Buatlah Aplikasi Untuk Menghitung Tarif Parkir dengan Ketentuan:
//          1. 3 Jam Pertama, Akan dikenakan Tarif 10.000
//          2. 1 Jam Berikutnya, AKan Dikenakan Tarif 1.500/jam 

let jamMasuk = 9
let jamKeluar = 4
let waktuMasuk = "AM"
let waktuKeluar = "PM"

function WaktuParkir (masuk,keluar,timeIn,timeOut){
    
let totalJam = 0

    if(timeIn === timeOut){
        totalJam = keluar - masuk
    }else{
        totalJam = (12-masuk) + keluar
    } 
    return totalJam
}

console.log(WaktuParkir(jamMasuk,jamKeluar,waktuMasuk,waktuKeluar))

function TarifParkir(sumJam){
let sumBiaya = 0

if(sumJam <= 3){
    sumBiaya = 10000
    
    }else if(sumJam > 3){
        sumBiaya = 10000 + ((sumJam-3)*1500)
        
    }
    return sumBiaya
} 

console.log(TarifParkir(WaktuParkir(jamMasuk,jamKeluar,waktuMasuk,waktuKeluar)))