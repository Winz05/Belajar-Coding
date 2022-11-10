// 1. Buatlah 2 buah function. Function 1 untuk memvalidasi email. 
// Function 2 untuk nge-return hasil validasi (true/false)
// (Buatlah menggunakan indirect callback maupun direct callback)

// 1. Indirect Callback

function Validasi(email,res){ 
    if(email.includes("@")){
        return res(true)
    }else{
        return res(false)
    }
}

function Output(result){ 
    return result 
}
console.log(Validasi("aswin05.aw@gmail.com",Output))
console.log(Validasi("aswin05.awgmail.com",Output))

// 2. Direct Callback 
function Validasi1(email,res){ 
    if(email.includes("@")){
        return res(true)
    }else{
        return res(false)
    }
}

console.log(Validasi1("aswin05.aw@gmail.com",function Output1(result){
    return result 
}))
console.log(Validasi1("aswin05.awgmail.com", function Output1(result){
    return result
}))






// 2. buatlah sebuah handling error untuk sebuah promise dengan beragam bentuk response sbb: 
// {status: 200, isError: false, massage: "Login Success", isData: true, data: {username: "ryan", isVerified}}
// - Apabila status: 200 & isError: false --> console.log datanya
// {status: 200, isError: true, massage: "username already exist", isData: false, data: {}}
// - Apabila status: 200 & isError : false --> throw massagenya
// {status: 500, isError: true, massage: "Error on server", isData: false, data: {}}
// - Apabila status: 500 & isError: true --> Tampilkan error massagenya di catch

let startPromise = new Promise((resolve, rejected) => {
    let response = {
        status: 200,
        isError: false,
        massage: "Login Success",
        isData: true,
        data: {username: "ryan", isVerified: true}
    }

    if(response.status === 200 && response.isError === false && response.isData === true){
        resolve(response.data)
    }else if(response.status === 200 && response.isError === true && response.isData === false){
        resolve(response.massage)
    }else if(response.status === 500 && response.isError === true && response.isData === false){
        rejected(response.massage)
    }
})



const tryAndCatch = async() => {
    try{
        let result = await startPromise 

        if(result.status === 200 && result.isError === false && response.isData === false){
            throw result
        }else{
            console.log(result)
        }
        
    }catch (error) {
        console.log(error)
    }
}

tryAndCatch()


let startPromise1 = new Promise((resolve, rejected) => {
    let response = {
        status: 200,
        isError: true,
        massage: "Username Already Exist",
        isData: false,
        data: {username: "ryan", isVerified: true}
    }

    if(response.status === 200 && response.isError === false && response.isData === true){
        resolve(response.data)
    }else if(response.status === 200 && response.isError === true && response.isData === false){
        resolve(response.massage)
    }else if(response.status === 500 && response.isError === true && response.isData === false){
        rejected(response.massage)
    }
})



const tryAndCatch1 = async() => {
    try{
        let result = await startPromise1 

        if(result.status === 200 && result.isError === true && response.isData === false){
            throw result
        }else{
            console.log(result)
        }
        
    }catch (error) {
        // console.log("Rejected diterima .catch")
        console.log(error)
    }
}

tryAndCatch1()



let startPromise2 = new Promise((resolve, rejected) => {
    let response = {
        status: 500,
        isError: true,
        massage: "Error On Server",
        isData: false,
        data: {username: "ryan", isVerified: true}
    }

    if(response.status === 200 && response.isError === false && response.isData === true){
        resolve(response.data)
    }else if(response.status === 200 && response.isError === true && response.isData === false){
        resolve(response.massage)
    }else if(response.status === 500 && response.isError === true && response.isData === false){
        rejected(response.massage)
    }
})



const tryAndCatch2 = async() => {
    try{
        let result = await startPromise2 

        if(result.status === 200 && result.isError === true && response.isData === false){
            throw result
        }else{
            console.log(result)
        }
        
    }catch (error) {
        // console.log("Rejected diterima .catch")
        console.log(error)
    }
}

tryAndCatch2()






