// Hitung Umur Berdasarkan DOB
function GetAge(dobInput){
let dob = new Date(dobInput)
let now = new Date()

let dobToMs = dob.getTime()
let nowToMs = now.getTime()
let msPerDay = 1000 * 24 * 3600 * 365

let dobInYear = dobToMs / msPerDay
let nowInYear = nowToMs / msPerDay

return Math.floor(nowInYear-dobInYear)
}

let students = [
    {
        name: "Tito",
        email: "tito@gmail.com",
        dob: "1980-10-05",
        getDob(){
             return GetAge(this.dob)
        },
        score: 100
    },
    {
        name: "Stephen",
        email: "stephen@gmail.com",
        dob: "1996-05-07",
        getDob(){
            return GetAge(this.dob)
        },
        score: 90
    },
    {
        name: "Gilang",
        email: "gilang@gmail.com",
        dob: "2000-07-05",
        getDob(){
            return GetAge(this.dob)
        },
        score: 95
    }
]
console.log(students[1].getDob())

function Umur(arr){

    let age = [40]

    for(let i =0; i < arr.length; i++){
        if(arr[i].getDob() < age[0]){
            age[0] = arr[i].getDob()
        }else{
            age.push(arr[i].getDob())
        }
    }
    console.log(age)
}
Umur(students)

// function Age(arr1){
//     let age = []   
//     let ageMax = [...age]
//     let ageMin = [...age]
    
//     for(let i = 0; i < arr1.length;i++){
//         age.push(arr1[i].age)  
//     }if(age[0]>age[1] && age[1]<age[2]){
//        ageMin[0] = age[1]
//     }else if(age[0]>age[2] && age[1]>age[2]){
//         ageMin[0] = age[2]
//     }else{
//         ageMin[0] = age[0]
//     }
//     console.log(`Lowest Age Dari Data Student adalah ${ageMin}`)

//     if(age[0]>age[1] && age[0]>age[2]){
//         ageMax[0] = age[0]
//     }else if(age[1]>age[0] && age[1]>age[2]){
//         ageMax[0] = age[1]
//     }else{
//         ageMax[0] = age[2]
//     }
//     console.log(`Highest Age Dari Data Student adalah ${ageMax}`)

//     let average = age.reduce((a,b) => (a+b))/arr1.length
//     console.log(`Average Age Dari Data Student adalah ${average}`)
// }
// Age(students)
