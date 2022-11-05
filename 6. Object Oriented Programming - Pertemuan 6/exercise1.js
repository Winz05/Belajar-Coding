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
        dob: "2006-10-05",
        getDob(){
             return GetAge(this.dob)
        },
        score: 100
    },
    {
        name: "Stephen",
        email: "stephen@gmail.com",
        dob: "1990-05-07",
        getDob(){
            return GetAge(this.dob)
        },
        score: 90
    },
    {
        name: "Gilang",
        email: "gilang@gmail.com",
        dob: "1988-07-05",
        getDob(){
            return GetAge(this.dob)
        },
        score: 95
    }
]


function CalculatedStudents(arr){
    let score = [] // [100, 99, 101]
    let age = []
    for(let i = 0; i < arr.length; i++){
        score.push(arr[i].score)
        if(arr[i].getDob() < 17){
            age[i] = null
        }else{ 
            age.push(arr[i].getDob())
        }
    }
    console.log(age)
    let scoreMin = Math.min(...score)
    let scoreMax = Math.max(...score)
    let averageScore = score.reduce((a,b) => (a + b))/arr.length

    let ageMin = Math.min(...age)
    let ageMax = Math.max(...age)
    let averageAge = Math.round(age.reduce((a,b) => (a+b))/arr.length)
    
    let res = {
        data: "Score",
        min: scoreMin,
        max: scoreMax,
        average: averageScore,
    }
    let res1 = {
        data: "Age",
        min: ageMin,
        max: ageMax,
        average: averageAge
    }
    return [res, res1]
}
console.log(CalculatedStudents(students))
