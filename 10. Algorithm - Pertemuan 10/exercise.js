// Upper Case Wave
// Ex Ryan --> Ryan 
//         --> rYan
//         --> ryAn
//         --> ryaN


function Upper(str){

    str = str.split("")
    
    let newData = ""

    for(let i = 0; i < str.length; i++){
      str[i] = str[i].toUpperCase()
      newData += str.join("") + '\n'
      str[i] = str[i].toLowerCase()
    }
    console.log(newData)
}

Upper("abc")

// Max. Range
// Ex. (Angka Pertama, Max Range, Range) --> (2,10,2) --> (2,4,6,8,10)
//                                       --> (3,5,1) --> (3,4,5)

function Jarak(angka1, max, range){
    let dataRange = [angka1]
    for(let i = 1; dataRange[i-1] < max;i++){
        dataRange.push(dataRange[i-1]+range)
    }
    console.log(dataRange)
}

Jarak(3,5,1)