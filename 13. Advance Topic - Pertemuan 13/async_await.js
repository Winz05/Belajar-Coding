let startPromise = new Promise((resolve, rejected) => {
    let response = false 

    if(response === true){
        resolve("Response Success")
    }else{
        rejected("Response Failure")
    }
})

const tryAndCatch = async() => {
    try{
        let result = await startPromise

        console.log(result)
    }catch (error) {
        console.log("Rejected diterima .catch")
        console.log(error)
    }
}

tryAndCatch()