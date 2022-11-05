let pengguna = [
    {username : "Bachtiar", email: "bachtiar@gmail.com", isVerified: null},
    {username : "Mrafli", email: "mrafli@gmail.com", isVerified: null},
    {username : "Vero", email: "veroyahoo.co.id", isVerified: null}
]

function ValidasiData(baris){
    for (let i=0 ; i<baris.length; i++){
        if(!baris[i].email.includes("@")){
            baris[i].isVerified = null
        }else{
            baris[i].isVerified = true
        }
    }return baris
}

// console.log(ValidasiData(pengguna))


function CheckUser(datauser){
    for(let i = 0; i < pengguna.length;i++){
        if(pengguna[i].username === datauser[0].username1){
            return "Username Already Exist"
        }
    }
    pengguna.push(datauser[0])
    return pengguna
}

console.log(CheckUser([{
    username1: "ryan",
    email: "ryan@gmail.com",
    isVerified: null

}]))