    let jamMasuk = prompt(`Silahkan Masukan Jam Masuk: `)
    
    let waktuIn = ["AM", "PM"]
    let waktuMasuk = "Silahkan Masukan Waktu Masuk: \n"
    
    for(let i = 0; i <= waktuIn.length-1;i++){
        waktuMasuk += (`1. ${waktuIn[i]}\n`)
    }
    
    let wktMasuk = prompt(`${waktuMasuk}`)

    
    let jamKeluar = prompt(`Silahkan Masukan Jam Keluar: `)
    
    let waktuOut = ["AM", "PM"]
    let waktuKeluar = "Silahkan Masukkan Waktu Keluar: \n"
    for(let i = 0; i <= waktuOut.length-1;i++){
    waktuKeluar += (`1. ${waktuOut[i]}\n`)
    }
    
    let wktKeluar = prompt(`${waktuKeluar}`)
    
    
    
    