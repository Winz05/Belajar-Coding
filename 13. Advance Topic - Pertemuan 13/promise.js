let startPromise = new Promise((resolve, rejected) => {
    let response = false

    if(response){
        resolve("Response Success")
    }else{
        rejected("Response Failure")
    }
})

startPromise 
.then((res) => {
    console.log("Masuk ke .then")
    console.log(res)
})
.catch((err) =>{
    console.log("Masuk ke .catch")
    console.log(err)
})
.finally(() => console.log("Finally Selalu Running!"))