// .forEach --> tidak menghasilkan array baru. dia hanya sekedar nge-looping seperti "For-Loop"
// Parameter 1 untuk mengambil masing-masing value dari dalam index
// Parameter 2 untuk mendapatkan index dari value nya 

let arr1 = ["Stephen", "Alfa", "Tito"]
let newArr1 = arr1.forEach((value,index) => {
    return value 
})

// .map --> Menghasilkan array baru. Sering digunakan untuk show data on page

let arr2 = ["A", "B", "C"]
let newArr2 = arr2.map((value,index) => {
    return value
})


let dataStudent = [
    {name: "Alfa", gender: "Pria"},
    {name: "Mutia", gender: "Wanita"},
    {name: "TIto", gender: "Pria"}
]

let newDataStudent = dataStudent.map(value => {
    if(value.gender === "Pria"){
        return `Mr. ${value.name}`
    }else{
        return `Mrs. ${value.name}`
    }
})

let newArr = []
let newDataForEach = dataStudent.forEach(value => {
    if(value.gender === "Pria"){
        newArr.push(`Mr. ${value.name}`)
    }else{
        newArr.push(`Mrs. ${value.name}`)
    }
})


console.log(newDataStudent)
console.log(newArr)
console.log(newArr1)
console.log(newArr2)


// .filter

let umur = [32, 33, 16, 40]
let result = umur.filter(value => {
    return value >= 18
})

console.log(result)