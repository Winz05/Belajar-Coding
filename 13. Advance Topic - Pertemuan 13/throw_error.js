let startPromise = new Promise((resolve, rejected) => {
    let response = {
        status: 200,
        isError: true,
        massage: "Success Tapi Error!"
    }

    if(response.status === 200 && response.isError === true){
        resolve(response)
    }else if(response.status === 200 && response.isError === false){
        resolve(response)
    }else{
        rejected(response)
    }
})



const tryAndCatch = async() => {
    try{
        let result = await startPromise // Apabila success akan di simpan ke result, dan apabila gagal akana langsung di pass ke catch

        if(result.status === 200 && result.isError === true){
            throw "Error dari .then"
        }else{
            console.log("Berhasil!!")
        }
        
    }catch (error) {
        console.log("Rejected diterima .catch")
        console.log(error)
    }
}

tryAndCatch()


let startPromise1 = new Promise((resolve, rejected) => {
    let response = {
        status: 200,
        isError: false,
        massage: "Success Tapi Error!"
    }

    if(response.status === 200 && response.isError === true){
        resolve(response)
    }else if(response.status === 200 && response.isError === false){
        resolve(response)
    }else{
        rejected(response)
    }
})



const tryAndCatch1 = async() => {
    try{
        let result = await startPromise1

        if(result.status === 200 && result.isError === true){
            throw "Error dari .then"
        }else{
            console.log("Berhasil!!")
        }
        
    }catch (error) {
        console.log("Rejected diterima .catch")
        console.log(error)
    }
}

tryAndCatch1()