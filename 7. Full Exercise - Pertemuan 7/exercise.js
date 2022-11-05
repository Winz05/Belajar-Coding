// Exercise Nomor 1
let obj1 =
    {
        name: "Aswin",
        umur: 26,
        hobi: "Bermain Bola"
    }


let obj2 =
    {
        name: "Edwin",
        hobi: "Mahasiswa",
        umur: 23

}


function CheckKey(ob1,ob2){
    let arrobj1 = []
    for(let key in ob1){
        arrobj1.push(key)
    }

    let arrobj2 = []
    for(let key in ob2){
        arrobj2.push(key)
    }

for(let i =0; i < arrobj1.length; i++){
        if(arrobj2.includes(arrobj1[i])){

        }else{
            return false
        }
    }
    return true
}
console.log(CheckKey(obj1,obj2))

// Exercise Nomor 2
let obje1 = {a:1, b:2, e:5, f:6}
let obje2 = {a:1, c:3, d:4, e: 5}


function Intersection(o1,o2){

    let res = []

    for(let key in o1){
        if(o1[key] === o2[key]){
           res.push({[key] : o1[key]})
        }
    }
    return Object.assign({},...res);
}    
console.log(Intersection(obje1,obje2))


//cara lain
function myfunc(objc1, objc2){
    let arr1 = []
    let arr1Val = []

    let arr2 = []
    let arr2Val = []

    for(let key1 in objc1){
        arr1.push(key1)
        arr1Val.push(objc1[key1])
    }

    for(let key1 in objc2){
        arr2.push(key1)
        arr2Val.push(objc2[key1])
    }

    let objectNew = {}
    for(let i=0; i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            let idxarr2 = arr2.indexOf(arr1[i])
            if(arr2Val[idxarr2] === arr1Val[i]){
                objectNew[arr1[i]] = arr1Val[i];
            }
        }
    }
    return objectNew
}
console.log(myfunc(obje1, obje2))

// [1,4]

// Exercise Nomor 3
let array1 = [
    {name: "Student1", email: "student1@mail.com"},
    {name: "Student2", email: "student2@mail.com"}
]
let array2 = [
    {name: "Student1", email: "student1@mail.com"},
    {name: "Student3", email: "student3@mail.com"}
]

function Merge(arry1,arry2){
    let merge = new Set(arry1.map(d => d.name));
    return [...arry1,...arry2.filter((d) => !merge.has(d.name))];
    
        
}

console.log(Merge(array1,array2))

// Exercise Nomor 4
let obj = { name: "David", age: 20 };

function Switch(object) {
    let a = [];
    let b = [];
    for (const key in object) {
        a.push(key);
        b.push(object[key]);
    }
    let ans = {};
    b.forEach((e, i) => {
        ans[e] = a[i];
    });

    return ans;
}
console.log(Switch(obj))


// Untuk Monsortir Data Array dari Kecil ke Besar
let dataNumber = [10, 40, 20, 50, 30]
let dataMin = []
let dataMax = []
for (let i =1; i <dataNumber.length;i++){
    for(let j = 0; j < i; j++){
        if(dataNumber[i]<dataNumber[j]){
            dataMin = dataNumber[i]
            dataNumber[i] = dataNumber[j]
            dataNumber[j] = dataMin
        }
    }
}
console.log(dataNumber)