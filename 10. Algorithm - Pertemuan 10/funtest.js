function Mid(char){
    let res = ""

   if(char.length%2 === 0){
    res = char.slice((char.length/2 -1),(char.length/2 +1))
   }else{
    res = char[Math.floor(char.length/2)].slice()
   }

  console.log(res)
}

Mid("Test")
Mid("Testing")
Mid("Middle")
Mid("A")

function Accum(str){

    let result = ""

    for(let i =0 ;i < str.length; i++){
        result += str[i].toUpperCase()
        result += str[i].repeat(i).toLowerCase()
        result += "-"
    }
    return result.slice(0,result.length-1)
}

console.log(Accum("abcd"))
console.log(Accum("RqaEzty"))
console.log(Accum("cwAt"))
