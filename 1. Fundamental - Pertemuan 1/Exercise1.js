// Exercise Nomer 1
// Step1. Menentukan var panjang dan lebar
let p = 5
let l = 10
// Step2. Cari luas Persegi panjang 
let luas_persegi = p*l
console.log(luas_persegi)

// Step3. Cari Keliling Persegi panjang
let keliling_persegi = 2* (p + l)
console.log(keliling_persegi)

// Exercise Nomer 2 
// Step1. Menentukan var r dan phi 
let r = 10
let phi = 3.14
// Step2. Cari Diameter lingkaran 
let D = 2*r 
console.log(D)

// Step3. Cari keliling lingkaran  
let Keliling_lingkaran = phi*D
console.log(Keliling_lingkaran)

// Step4. Cari luas lingkaran
let Luas_lingkaran = phi * r * r
console.log(Luas_lingkaran)

// Exercise Nomer 3
// Step1. Mencari sudut1 sudut2 dan total sudut 
let sudut1 = 80
let sudut2 = 65 
let total_sudut = 180
// Step2. Mencari sudut3
let sudut3 = total_sudut - sudut1 - sudut2
console.log(sudut3)

// Exercise Nomer 4
// Menghitung hari dari 2 tanggal 

// Step1. Waktu 1 hari dalam ms 
var one_day = 1000 * 60 * 60 * 24
console.log(one_day)
// Step2. Mengatur 2 tanggal menjadi variabel
let date1 = new Date("2022-10-25")
let date2 = new Date("2022-09-05")
// Step3. day1Toms, day2Toms
let day1ToMs = date1.getTime()
let day2ToMs = date2.getTime()
// Step4. Menjadi hari 
day1 = day1ToMs / one_day
day2 = day2ToMs / one_day

jmlhHari = day1 - day2
console.log(`Jadi jumlah hari diantara tanggal ${date1} dan tanggal ${date2} adalaha ${jmlhHari} hari`)

// Exercise Nomer 5
// Step1. Menentukan variabel hari terlebih dahulu
let jmlh_hari = 400
// Step2. Menentukan Tahun
let tahun = Math.floor (jmlh_hari / 365)  // Math Object fungsinya pembulatan ke bawah
console.log(tahun)                         // Math.ceil() ---> fungsinya pembulatan ke atas
// Step3. Menentukan Bulan                  // Math.round() ---> fungsinya pembulatan sesuai aturan matematika
let bulan = Math.floor (jmlh_hari % 365 / 30)
console.log(bulan)
// Step4. Menentukan Hari 
let hari = Math.floor (jmlh_hari % 365 % 30)
console.log(hari)
// Step5. Menggabungkan Tahun, Bulan dan Hari
console.log(`dari ${jmlh_hari} hari, terdapat ${tahun} tahun, ${bulan} bulan, dan ${hari} hari`)

// Step2. Menentukan Tahun
let tahun1 = Math.ceil (jmlh_hari / 365)
console.log(tahun1)
// Step3. Menentukan Bulan
let bulan1 = Math.ceil (jmlh_hari % 365 / 30)
console.log(bulan1)
// Step4. Menentukan Hari 
let hari1 = Math.ceil (jmlh_hari % 365 % 30)
console.log(hari1)
// Step5. Menggabungkan Tahun, Bulan dan Hari
console.log(`dari ${jmlh_hari} hari, terdapat ${tahun1} tahun, ${bulan1} bulan, dan ${hari1} hari`)

// Step2. Menentukan Tahun
let tahun2 = jmlh_hari / 365
tahun2.toPrecision(1)
console.log(tahun2)
// Step3. Menentukan Bulan
let bulan2 = jmlh_hari % 365 / 30
bulan2.toPrecision(1)
console.log(bulan2)
// Step4. Menentukan Hari 
let hari2 = jmlh_hari % 365 % 30
hari2.toPrecision(1)
console.log(hari2)
// Step5. Menggabungkan Tahun, Bulan dan Hari
console.log(`dari ${jmlh_hari} hari, terdapat ${tahun2} tahun, ${bulan2} bulan, dan ${hari2} hari`)
